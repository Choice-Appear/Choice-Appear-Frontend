import styles from './OrderList.module.scss';
import { useState } from 'react';
import type { OrderTab } from '@/widgets/myPage/model/types';
import { UserNavigation } from '@/features/myPageNavigation';
import { OrderSearchNotice, SearchOrderByDate } from '@/features/order';


export const OrderList = () => {
  const [activeTab, setActiveTab] = useState<OrderTab>('order');

  const handleTabChange = (tab: OrderTab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <UserNavigation />

        <div>
          <h2>주문 조회</h2>

          {/* 탭 */}
          <div className={styles.tabs}>
            <button
              type="button"
              id="order-tab"
              className={activeTab === 'order' ? styles.active : ''}
              onClick={() => handleTabChange('order')}
            >
              주문내역 조회
            </button>
            <button
              type="button"
              id="cancel-tab"
              className={activeTab == 'cancel' ? styles.active : ''}
              onClick={() => handleTabChange('cancel')}
            >
              취소/반품/교환 내역
            </button>
          </div>

          {/* 검색 폼 */}
          <SearchOrderByDate showOrderStatus={activeTab === 'order'} />

          {/* 검색 안내사항 */}
          <OrderSearchNotice />
          <hr className={styles.horizontal} />
        </div>
      </section>
    </div>
  );
};
