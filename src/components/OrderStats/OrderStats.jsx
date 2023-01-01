import React from 'react';
import styles from './OrderStats.module.css';


export function OrderStats({ total = 28752, totalToday = 138 }) {
  const displayOrderNumber = (isDone = false, ordersArray = ['034533', '034532', '034530', '034527', '034525', '034523']) => {
    return ordersArray.map((item, index) => {
      return (
        <li key={index} className={`${styles.listItem} mb-2`}>
          <p className={`${isDone ? styles.orderDone : ''} text text_type_digits-default`}>{item}</p>
        </li>);
    });
  };

  return (
    <div className={`${styles.container} pt-15 ml-15`}>

      <div className={`${styles.ordersBoard} mb-15`}>
        <div className={styles.groupList}>
          <h2 className='text text_type_main-medium mb-6'>Готовы:</h2>

          <ul className={styles.list}>
            {displayOrderNumber(true)}
          </ul>
        </div>

        <div className={`${styles.groupList} pl-6`}>
          <h2 className='text text_type_main-medium mb-6'>В работе:</h2>

          <ul className={styles.list}>
            {displayOrderNumber()}
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
