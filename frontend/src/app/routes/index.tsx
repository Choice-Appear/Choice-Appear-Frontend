import LoginPage from '@/pages/loginPage/LoginPage';
import MainPage from '@/pages/mainPage/MainPage';
import MyBasket from '@/pages/myBasket/MyBasket';
import MyPage from '@/pages/myPage/MyPage';
import WishList from '@/pages/wishList/WishList';
import MainLayout from '@/shared/ui/MainLayout';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'wishlist',
        element: <WishList />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: 'mybasket',
        element: <MyBasket />,
      },
    ],
  },
]);
