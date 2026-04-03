import PrivateRoute from './PrivateRoute';
import MainLayout from '@/shared/ui/MainLayout';

import LoginPage from '@/pages/loginPage/ui/LoginPage';
import MainPage from '@/pages/mainPage/ui/MainPage';
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
import { NoticeBoard, QnaBoard } from '@/pages/board';
import { WishList } from '@/pages/wishList';

import { createBrowserRouter } from 'react-router-dom';
import AuthGuard from './AuthGuard';
import { PostWritePage } from '@/pages/board/ui/PostWritePage';

export const router = createBrowserRouter([
  {
    element: <AuthGuard />,
    children: [
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
            path: 'notice',
            element: <NoticeBoard />,
          },
          {
            path: 'notice/new-post',
            element: <PostWritePage />,
          },
          {
            path: 'qna',
            element: <QnaBoard />,
            children: [
              {
                path: 'new-post',
                element: <PostWritePage />,
              },
            ],
          },

          /* 보호 라우트 */
          {
            element: <PrivateRoute />,
            children: [
              {
                path: 'wishlist',
                element: <WishList />,
              },
              {
                path: 'mybasket',
                element: <MyBasket />,
              },
            ],
          },
        ],
      },
      {
        path: '/mypage',
        element: <MainLayout />,
        children: [
          {
            element: <PrivateRoute />,
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
                path: 'address/modify/:addressId',
                element: <AddressModify />,
              },
              {
                path: 'order',
                element: <OrderList />,
              },
            ],
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

          /* 보호 라우트 */
          {
            element: <PrivateRoute />,
            children: [
              {
                path: 'modify',
                element: <MemberInfo />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
