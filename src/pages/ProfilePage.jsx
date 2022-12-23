import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styles from './ProfilePage.module.css';
import commonStyles from './commonStyles.module.css';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import { logoutUser, getUserData, refreshUserData, updateToken } from '../services/actions/auth';



export function ProfilePage() {
  const dispatch = useDispatch();

  const { name, email } = useSelector(store => store.auth.user);
  const { getUserDataFailed, getUserDataMessage, updateTokenRequest } = useSelector(store => store.auth);

  const [nameValue, setNameValue] = useState('');
  const [loginValue, setLoginValue] = useState(''); //Логин на форме соответствует e-mail пользователя.
  const [passwordValue, setPasswordValue] = useState('');

  const onExitLinkClick = (e) => {
    e.preventDefault();

    dispatch(logoutUser());
  }

  useEffect(() => {
    dispatch(getUserData());
  },
    [dispatch, updateTokenRequest]);

  useEffect(() => {
    if (getUserDataFailed && getUserDataMessage === 'Ошибка 403') {
      console.log('User data fetch error. Need to update access token!');
      dispatch(updateToken());
    }
  },
    [getUserDataFailed, getUserDataMessage]);

  useEffect(() => {
    setNameValue(name);
    setLoginValue(email);
  },
    [name, email]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(refreshUserData(loginValue, nameValue, passwordValue));
  }

  const onFormReset = (e) => {
    e.preventDefault();

    setNameValue(name);
    setLoginValue(email);
    setPasswordValue('');
  }


  return (
    <main className={commonStyles.main}>

      <div className={styles.container}>

        <div className={`${styles.navContainer} mr-15`}>
          <nav>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <NavLink
                  to='/profile'
                  exact={true}
                  className={`${styles.navigationLink} text text_type_main-medium text_color_inactive`}
                  activeClassName={commonStyles.navigationLinkActive}>
                  Профиль
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink
                  to='/profile/orders'
                  exact={true}
                  className={`${styles.navigationLink} text text_type_main-medium text_color_inactive`}
                  activeClassName={commonStyles.navigationLinkActive}>
                  История заказов
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink
                  to='/login'
                  exact={true}
                  onClick={onExitLinkClick}
                  className={`${styles.navigationLink} text text_type_main-medium text_color_inactive`}
                  activeClassName={commonStyles.navigationLinkActive}>
                  Выход
                </NavLink>
              </li>
            </ul>
          </nav>

          <p className='text text_type_main-default text_color_inactive mt-20'>
            В этом разделе вы можете изменить&nbsp;свои персональные данные
          </p>
        </div>

        <form onSubmit={onFormSubmit} onReset={onFormReset}>
          <Input
            value={nameValue}
            type={'text'}
            icon={'EditIcon'}
            placeholder={'Имя'}
            onChange={e => setNameValue(e.target.value)}
            extraClass='mb-6'
          />
          <Input
            value={loginValue}
            type={'text'}
            icon={'EditIcon'}
            placeholder={'Логин'}
            onChange={e => setLoginValue(e.target.value)}
            extraClass='mb-6'
          />
          <PasswordInput
            value={passwordValue}
            icon={'EditIcon'}
            onChange={e => setPasswordValue(e.target.value)} />

          <div className={`${styles.buttonGroup} mt-6`}>
            <Button htmlType="reset" type="primary" size="medium">Отмена</Button>
            <Button htmlType="submit" type="primary" size="medium">Сохранить</Button>
          </div>

        </form>

      </div>

    </main>
  );
}
