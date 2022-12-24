import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import commonStyles from './commonStyles.module.css';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { registerUser } from '../services/actions/auth';
import { getCookie } from '../utils/cookie';


export function RegistrationPage() {
  const dispatch = useDispatch();

  const isUserAuth = getCookie('token');

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser(emailValue, passwordValue, nameValue));
  }

  return (isUserAuth) ? (
    <Redirect to='/' />
  ) : (
    <main className={commonStyles.main}>

      <div className={commonStyles.container}>
        <h1 className="text text_type_main-medium">Регистрация</h1>

        <form className={commonStyles.form} onSubmit={onFormSubmit}>
          <Input
            value={nameValue}
            type={'text'}
            placeholder={'Имя'}
            onChange={e => setNameValue(e.target.value)}
            extraClass='mt-6'
          />
          <Input
            value={emailValue}
            type={'email'}
            placeholder={'E-mail'}
            onChange={e => setEmailValue(e.target.value)}
            extraClass='mt-6 mb-6'
          />
          <PasswordInput value={passwordValue} onChange={e => setPasswordValue(e.target.value)} />
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass='mt-6 mb-20'
            disabled={!nameValue || !emailValue || !passwordValue} >
            Зарегистрироваться
          </Button>
        </form>

        <div className={`${commonStyles.navigationBlock} mb-4`}>
          <p className='text text_type_main-default text_color_inactive'>
            Уже зарегистрированы? <Link to="/login" className={commonStyles.navigationLink}>Войти</Link>
          </p>
        </div>
      </div>

    </main>
  );
}
