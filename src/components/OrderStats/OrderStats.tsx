import React, { FC } from 'react';
import { useSelector } from '../../services/hooks/hooks';
import { IOrderDataResponse } from '../../services/types/data';
import styles from './OrderStats.module.css';



export const OrderStats: FC = () => {
  const { orders, total, totalToday } = useSelector(store => store.ws);

  const ordersStatusDone = orders?.filter(item => item.status === 'done').slice(0, 30);
  const ordersStatusPending = orders?.filter(item => item.status === 'pending').slice(0, 30);

  const displayOrderNumber = (ordersArray: IOrderDataResponse[], isDone = false) => {
    return ordersArray.map(item => {
      return (
        <li key={item._id} className={`${styles.listItem} mb-2`}>
          <p className={`${isDone ? styles.orderDone : ''} text text_type_digits-default`}>{item.number}</p>
        </li>);
    });
  };

  return (
    <div className={`${styles.container} pt-15 ml-15`}>

      <div className={`${styles.ordersBoard} mb-15`}>
        <div className={styles.groupList}>
          <h2 className='text text_type_main-medium mb-6'>Готовы:</h2>

          <ul className={styles.list}>
            {displayOrderNumber(ordersStatusDone, true)}
          </ul>
        </div>

        <div className={`${styles.groupList} pl-6`}>
          <h2 className='text text_type_main-medium mb-6'>В работе:</h2>

          <ul className={styles.list}>
            {displayOrderNumber(ordersStatusPending)}
          </ul>
        </div>
      </div>

      <div className={styles.groupTotal}>
        <h2 className='text text_type_main-medium'>Выполнено за все время:</h2>
        <p className={`${styles.glowText} text text_type_digits-large mb-15`}>{total.toLocaleString()}</p>
      </div>

      <div className={styles.groupTotal}>
        <h2 className='text text_type_main-medium'>Выполнено за сегодня:</h2>
        <p className={`${styles.glowText} text text_type_digits-large`}>{totalToday}</p>
      </div>
    </div>
  );
}
