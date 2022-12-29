import React from 'react';
import styles from './OrderList.module.css';
import { Order } from '../Order/Order';


export function OrderList() {
  return (
    <div className={styles.container}>
      <h1 className='text text_type_main-large'>Лента заказов</h1>

      <ul className={styles.list}>
        <Order id={'034535'} date={'2022-10-10T17:33:32.877Z'} name={'Death Star Starship Main бургер'} price={480} />
        <Order id={'034534'} date={'2022-10-10T17:33:32.877Z'} name={'Interstellar бургер'} price={560} />
      </ul>
    </div>
  );
}