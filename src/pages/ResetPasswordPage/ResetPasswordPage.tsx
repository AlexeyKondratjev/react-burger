import React, { FC, FormEvent, useState } from 'react';
import commonStyles from '../commonStyles.module.css';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { resetPassword } from '../../services/actions/auth';
import { useDispatch, useSelector } from '../../services/hooks/hooks';
import { TLocationState } from '../../services/types/data';


export const ResetPasswordPage: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation<TLocationState>();

  const { isResetPasswordSuccess } = useSelector(store => store.auth);

  const [passwordValue, setPasswordValue] = useState('');
  const [resetCodeValue, setResetCodeValue] = useState('');

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(resetPassword(passwordValue, resetCodeValue));
  }

  if ((location.state ? location.state.from?.pathname : undefined) !== '/forgot-password') {
    return <Redirect to='/forgot-password' />;
  };

  if (isResetPasswordSuccess) {
    return (<Redirect to={'/login'} />);
  }



  return (
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
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass='mt-6 mb-20'
            disabled={!passwordValue || !resetCodeValue} >
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
