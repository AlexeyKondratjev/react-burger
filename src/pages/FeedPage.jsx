import React, { useState } from 'react';
import commonStyles from './commonStyles.module.css';
import styles from './FeedPage.module.css';
import { OrderList } from '../components/OrderList/OrderList';
import { OrderStats } from '../components/OrderStats/OrderStats';



export function FeedPage() {
  return (
    <main className={commonStyles.main}>

      <div className={styles.container}>
        <OrderList />
        <OrderStats />
      </div>

    </main>
  );
}
