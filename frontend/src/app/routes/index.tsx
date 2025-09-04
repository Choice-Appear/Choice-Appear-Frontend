import MainPage from '@/pages/mainPage/MainPage';
import MainLayout from '@/shared/ui/MainLayout';
import { createHashRouter } from 'react-router-dom';

export const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);
