import React from 'react';
import styles from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, NavLink, useLocation } from 'react-router-dom';

function AppHeader() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.content}>

        <nav>
          <ul className={styles.list}>
            <li className='mt-4 mr-7 mb-4 ml-5'>
              <NavLink to='/' exact={true} className={styles.link} activeClassName={styles.activeLink}>
                <BurgerIcon type={location.pathname === '/' ? 'primary' : 'secondary' } />
                <p className='text text_type_main-default ml-2'>Конструктор</p>
              </NavLink>
            </li>
            <li className='mt-4 mr-5 mb-4 ml-5'>
              <NavLink to='/orders-feed' exact={true} className={styles.link} activeClassName={styles.activeLink}>
                <ListIcon type={location.pathname === '/orders-feed' ? 'primary' : 'secondary' } />
                <p className='text text_type_main-default ml-2'>Лента заказов</p>
              </NavLink>
            </li>
          </ul>
        </nav>

        <Link to='/'>
          <Logo />
        </Link>

        <nav className={styles.personalCab}>
          <ul className={styles.list}>
            <li className='mt-4 mr-5 mb-4 ml-5'>
              <NavLink to='/profile' exact={true} className={styles.link} activeClassName={styles.activeLink}>
                <ProfileIcon type={location.pathname === '/profile' ? 'primary' : 'secondary' } />
                <p className='text text_type_main-default ml-2'>Личный кабинет</p>
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default AppHeader;
