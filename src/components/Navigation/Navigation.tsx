import React, { FC, MouseEvent } from 'react';
import styles from './Navigation.module.css';
import commonStyles from '../../pages/commonStyles.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { logoutUser } from '../../services/actions/auth';
import { useDispatch } from '../../services/hooks/hooks';
import { TLocationState } from '../../services/types/data';



export const Navigation: FC = () => {
    const dispatch = useDispatch();
    const location = useLocation<TLocationState>();

    const switchNavigationFooterText = (location: { pathname: string }) => {
        switch (location.pathname) {
            case '/profile':
                return <>В этом разделе вы можете изменить&nbsp;свои персональные данные</>;
            case '/profile/orders':
                return <>В этом разделе вы можете просмотреть&nbsp;свою историю заказов</>;
            default:
                return '';
        };
    };

    const onExitLinkClick = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();

        dispatch(logoutUser());
    };


    return (
        <div className={styles.navContainer}>
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
                {switchNavigationFooterText(location)}
            </p>
        </div>
    );
};
