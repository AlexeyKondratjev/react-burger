import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import commonStyles from './commonStyles.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { forgotPassword } from '../services/actions/auth';
import { getCookie } from '../utils/cookie';


export function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isUserAuth = getCookie('token');

  const { isPasswordRecoveryEmailReceived } = useSelector(store => store.auth);

  const [emailValue, setEmailValue] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(forgotPassword(emailValue));
  }

  if (isPasswordRecoveryEmailReceived) {
    return (<Redirect to={{ pathname: '/reset-password', state: {from: location} }} />);
  }

  return (isUserAuth) ? (
    <Redirect to='/' />
  ) : (
    <main className={commonStyles.main}>

      <div className={commonStyles.container}>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>

        <form className={commonStyles.form} onSubmit={onFormSubmit}>
          <Input
            value={emailValue}
            type={'email'}
            placeholder={'Укажите e-mail'}
            onChange={e => setEmailValue(e.target.value)}
            extraClass='mt-6'
          />
          <Button htmlType="submit" type="primary" size="medium" extraClass='mt-6 mb-20' >
            Восстановить
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
