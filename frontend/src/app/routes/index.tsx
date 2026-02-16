import MainLayout from '@/shared/ui/MainLayout';
import LoginPage from '@/pages/loginPage/LoginPage';
import MainPage from '@/pages/mainPage/MainPage';
import {
  AddressModify,
  Coupon,
  MemberInfo,
  MyAddress,
  MyPage,
  OrderList,
} from '@/pages/myPage';
import { Agreement, Join, SignupDone } from '@/pages/signupPage';
import { CategoryList, RecentView } from '@/pages/products';
import { MyBasket } from '@/pages/myBasket';
import { NoticeBoard } from '@/pages/board';
import { WishList } from '@/pages/wishList';

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
        path: 'address/register',
        element: <AddressModify />,
      },
      {
        path: 'address/modify',
        element: <AddressModify />,
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
        path: 'recent-view-products',
        element: <RecentView />,
      },
      {
        path: ':category',
        element: <CategoryList />,
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
      {
        path: 'modify',
        element: <MemberInfo />,
      },
    ],
  },
]);
