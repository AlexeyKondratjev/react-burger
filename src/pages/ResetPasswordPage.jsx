import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import commonStyles from './commonStyles.module.css';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { resetPassword } from '../services/actions/auth';
import { getCookie } from '../utils/cookie';

export function ResetPasswordPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const isUserAuth = getCookie('token');

  const [passwordValue, setPasswordValue] = useState('');
  const [resetCodeValue, setResetCodeValue] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(resetPassword(passwordValue, resetCodeValue));
  }



  return (isUserAuth) ? (
    <Redirect to='/' />
  ) : (location.state?.from?.pathname !== '/forgot-password') ? (<Redirect to='/forgot-password' />) : (
    <main className={commonStyles.main}>

      <div className={commonStyles.container}>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>

        <form className={commonStyles.form} onSubmit={onFormSubmit}>
          <PasswordInput
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
            placeholder={'Введите новый пароль'}
            extraClass='mt-6'
          />
          <Input
            value={resetCodeValue}
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={e => setResetCodeValue(e.target.value)}
            extraClass='mt-6'
          />
          <Button htmlType="submit" type="primary" size="medium" extraClass='mt-6 mb-20' >
            Сохранить
          </Button>
        </form>

        <div className={`${commonStyles.navigationBlock} mb-4`}>
          <p className='text text_type_main-default text_color_inactive'>
            Вспомнили пароль? <Link to="/login" className={commonStyles.navigationLink}>Войти</Link>
          </p>
        </div>
      </div>

    </main>
  );
}
