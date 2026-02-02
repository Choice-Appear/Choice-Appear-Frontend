import MainLayout from '@/shared/ui/MainLayout';
import NoticeBoard from '@/pages/board/NoticeBoard';
import LoginPage from '@/pages/loginPage/LoginPage';
import MainPage from '@/pages/mainPage/MainPage';
import MyPage from '@/pages/myPage/MyPage';
import WishList from '@/pages/wishList/WishList';
import { MyBasket } from '@/pages/myBasket';
import { Cap, Hoodie, Men, Women } from '@/pages/products';
import { Agreement, Join, SignupDone } from '@/pages/signupPage';

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
      {
        path: 'notice',
        element: <NoticeBoard />,
      },
    ],
  },
  {
    path: '/products',
    element: <MainLayout />,
    children: [
      {
        path: 'men',
        element: <Men />,
      },
      {
        path: 'women',
        element: <Women />,
      },
      {
        path: 'cap',
        element: <Cap />,
      },
      {
        path: 'hoodie',
        element: <Hoodie />,
      },
    ],
  },
  {
    path: '/member',
    element: <MainLayout />,
    children: [
      {
        path: 'agreement',
        element: <Agreement />,
      },
      {
        path: 'join',
        element: <Join />,
      },
      {
        path: 'join-done',
        element: <SignupDone />,
      },
    ],
  },
]);
