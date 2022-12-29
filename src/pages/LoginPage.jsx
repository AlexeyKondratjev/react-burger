import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import commonStyles from './commonStyles.module.css';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { loginUser } from '../services/actions/auth';



export function LoginPage() {
  const dispatch = useDispatch();

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(emailValue, passwordValue));
  }


  return (
    <main className={commonStyles.main}>

      <div className={commonStyles.container}>
        <h1 className="text text_type_main-medium">Вход</h1>

        <form className={commonStyles.form} onSubmit={onFormSubmit}>
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
            disabled={!emailValue || !passwordValue} >
            Войти
          </Button>
        </form>

        <div className={`${commonStyles.navigationBlock} mb-4`}>
          <p className='text text_type_main-default text_color_inactive'>
            Вы - новый пользователь? <Link to="/register" className={commonStyles.navigationLink}>Зарегистрироваться</Link>
          </p>
        </div>

        <div className={`${commonStyles.navigationBlock}`}>
          <p className='text text_type_main-default text_color_inactive'>
            Забыли пароль? <Link className={commonStyles.navigationLink} to="/forgot-password">Восстановить пароль</Link>
          </p>
        </div>
      </div>

    </main>
  )
}
