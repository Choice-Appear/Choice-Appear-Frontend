import MainPage from '@/pages/mainPage/MainPage';
import { createHashRouter } from 'react-router-dom';

export const router = createHashRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);

// 추후 확장
