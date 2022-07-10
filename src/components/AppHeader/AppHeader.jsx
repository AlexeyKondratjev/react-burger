import React from 'react';
import appHeaderStyles from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={appHeaderStyles.header}>
      <div className={appHeaderStyles.content}>

        <nav>
          <ul className={appHeaderStyles.list}>
            <li className='mt-4 mr-7 mb-4 ml-5'>
              <a href='#' className={`${appHeaderStyles.link} ${appHeaderStyles.link_active}`}>
                <BurgerIcon type='primary' />
                <p className='text text_type_main-default ml-2'>Конструктор</p>
              </a>
            </li>
            <li className='mt-4 mr-5 mb-4 ml-5'>
              <a href='#' className={appHeaderStyles.link}>
                <ListIcon type='secondary' />
                <p className='text text_type_main-default ml-2'>Лента заказов</p>
              </a>
            </li>
          </ul>
        </nav>

        <Logo />

        <nav className={appHeaderStyles.personalCab}>
          <ul className={appHeaderStyles.list}>
            <li className='mt-4 mr-5 mb-4 ml-5'>
              <a href='#' className={appHeaderStyles.link}>
                <ProfileIcon type='secondary' />
                <p className='text text_type_main-default ml-2'>Личный кабинет</p>
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default AppHeader;
