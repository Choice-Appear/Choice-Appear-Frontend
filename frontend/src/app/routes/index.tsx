import MainLayout from '@/shared/ui/MainLayout';
import NoticeBoard from '@/pages/board/NoticeBoard';
import LoginPage from '@/pages/loginPage/LoginPage';
import MainPage from '@/pages/mainPage/MainPage';
import WishList from '@/pages/wishList/WishList';
import {
  Coupon,
  MemberInfo,
  MyAddress,
  MyPage,
  OrderList,
} from '@/pages/myPage';
import { MyBasket } from '@/pages/myBasket';
import { Cap, Hoodie, Men, RecentView, Women } from '@/pages/products';
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
    path: '/mypage',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <MyPage />,
      },
      {
        path: 'coupon',
        element: <Coupon />,
      },
      {
        path: 'address',
        element: <MyAddress />,
      },
      {
        path: 'order',
        element: <OrderList />,
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
      {
        path: 'recent-view-products',
        element: <RecentView />,
      }
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
      {
        path: 'modify',
        element: <MemberInfo />,
      },
    ],
  },
]);
