import React from 'react';
import commonStyles from './commonStyles.module.css';
import { Link } from 'react-router-dom';



export function OrdersPage() {
  return (
    <main className={commonStyles.main}>
      <div className={commonStyles.container}>
        <h1 className="text text_type_main-medium mb-6">Здесь пока ничего нет...</h1>

        <div className={`${commonStyles.navigationBlock}`}>
          <p className='text text_type_main-default text_color_inactive'>
            <Link className={commonStyles.navigationLink} to="/profile">Обратно</Link> на страницу профиля
          </p>
        </div>
      </div>
    </main>
  );
}
