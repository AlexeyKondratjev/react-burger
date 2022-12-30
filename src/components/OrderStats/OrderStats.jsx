import React from 'react';
import styles from './OrderStats.module.css';


export function OrderStats() {
  return (
    <div className={styles.container}>
      <h2>Готовы:</h2>
      <h2>В работе:</h2>
      <h2>Выполнено за все время:</h2>
      <h2>Выполнено за сегодня:</h2>
    </div>
  );
}
