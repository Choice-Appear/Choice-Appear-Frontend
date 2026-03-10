import '@/app/styles/global.scss';
import 'antd/dist/reset.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { useAuthStore } from '@/features/login';
import { useEffect } from 'react';

function App() {
  const initAuth = useAuthStore(state => state.initAuth);

  // 앱 마운트 시 토큰 상태 초기화
  useEffect(() => {
    initAuth();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
