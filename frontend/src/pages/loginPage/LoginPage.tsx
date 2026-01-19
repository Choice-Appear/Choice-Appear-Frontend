import styles from './LoginPage.module.scss';
import { useEffect, useState, type FormEvent } from 'react';
import { useLogin } from '@/features/auth/hooks';
import { LoginForm } from '@/widgets/form';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    profileId: '',
    password: '',
  });

  const [saveId, setSaveId] = useState(false);

  const { mutate: login, isPending } = useLogin();

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

    // 입력 오류 처리
    // if (!formData.profileId) {
    //   alert('아이디를 입력해주세요.');
    //   return;
    // }

    // if (!formData.password) {
    //   alert('비밀번호를 입력해주세요');
    //   return;
    // }

    // 아이디 저장
    if (saveId) {
      localStorage.setItem('saveId', formData.profileId);
    } else {
      localStorage.removeItem('saveId');
    }

    // 로그인 요청
    login(formData);
  };

  return (
    <main className={styles.main}>
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
    </main>
  );
};

export default LoginPage;
