import React from 'react';
import styles from './NotFoundPage.module.css';
import commonStyles from './commonStyles.module.css';
import { Link } from 'react-router-dom';

export function NotFoundPage() {

  return (
    <main className={commonStyles.main}>
      <div className={styles.container}>
        <h1 className={`${styles.h1} text text_type_main-large`}>Error</h1>
        <p className={`${styles.p1} text text_type_digits-large`}>404</p>
        <p className={`${styles.p2} text text_type_main-large`}>Page not found!</p>

        <div className={styles.navigationBlock}>
          <p className='text text_type_main-default text_color_inactive'>
            <Link to="/" className={commonStyles.navigationLink}>Вернуться</Link> на главную страницу
          </p>
        </div>
      </div>
    </main>
  );
}
