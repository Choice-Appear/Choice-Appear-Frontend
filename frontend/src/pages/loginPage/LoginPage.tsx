import styles from './LoginPage.module.scss';
import { useEffect, useState, type FormEvent } from 'react';
import { useLogin } from '@/features/auth/login';
import { LoginForm } from '@/features/auth/login';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/login/model/authStore';
import { isAxiosError } from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const login = useAuthStore(state => state.login);
  const isLogin = useAuthStore(state => state.isLogin);

  const [formData, setFormData] = useState({
    profileId: '',
    password: '',
  });

  const [saveId, setSaveId] = useState(false);

  const { mutate: loginMutation, isPending } = useLogin();

  // 이미 로그인 된 경우 리다이렉트 처리
  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  // 저장된 아이디 불러오기
  useEffect(() => {
    const saveId = localStorage.getItem('saveId');
    if (saveId) {
      setFormData(prev => ({ ...prev, profileId: saveId }));
      setSaveId(true);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // 아이디 저장
    if (saveId) {
      localStorage.setItem('saveId', formData.profileId);
    } else {
      localStorage.removeItem('saveId');
    }

    // 로그인 요청
    loginMutation(formData, {
      onSuccess: response => {
        const { accessToken, accessTokenExpiresAt, nickname } = response.data;

        // 로그인 (쿠키에 토큰 저장)
        login(formData.profileId, nickname, accessToken, accessTokenExpiresAt);

        // 라우팅
        navigate('/');
      },
      onError: error => {
        if (isAxiosError(error)) {
          if (error.response?.status === 401) {
            alert('아이디 또는 비밀번호를 잘못 입력했습니다.');
          } else {
            alert('로그인에 실패했습니다.');
          }
        }
      },
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <LoginForm
          formData={formData}
          onFormDataChange={setFormData}
          saveId={saveId}
          onSaveIdChange={setSaveId}
          isPending={isPending}
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default LoginPage;
