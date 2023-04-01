import React, { FC, useEffect, useState } from 'react';
import styles from './ProfileForm.module.css';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { refreshUserData } from '../../services/actions/auth';
import { useDispatch, useSelector } from '../../services/hooks/hooks';



export const ProfileForm: FC = () => {
    const dispatch = useDispatch();
    const name = useSelector(store => store.auth.user?.name);
    const email = useSelector(store => store.auth.user?.email);

    const [nameValue, setNameValue] = useState<string | undefined>('');
    const [loginValue, setLoginValue] = useState<string | undefined>(''); //Логин на форме соответствует e-mail пользователя.
    const [passwordValue, setPasswordValue] = useState('');

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(refreshUserData(loginValue, nameValue, passwordValue));
    };

    const onFormReset = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setNameValue(name);
        setLoginValue(email);
        setPasswordValue('');
    };

    useEffect(() => {
        setNameValue(name);
        setLoginValue(email);
      },
        [name, email]);


    return (
        <form onSubmit={onFormSubmit} onReset={onFormReset}>
            <Input
                value={nameValue!}
                type={'text'}
                icon={'EditIcon'}
                placeholder={'Имя'}
                onChange={e => setNameValue(e.target.value)}
                extraClass='mb-6'
            />
            <Input
                value={loginValue!}
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
    );
};
