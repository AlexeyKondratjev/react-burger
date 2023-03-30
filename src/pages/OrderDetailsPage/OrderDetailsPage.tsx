import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { OrderDetails } from '../../components/OrderDetails/OrderDetails';
import { wsCloseConnection, wsInitAuthConnection, wsInitConnection } from '../../services/actions/webSocket';
import { useDispatch, useSelector } from '../../services/hooks/hooks';
import { TLocationState } from '../../services/types/data';
import { getCookie } from '../../utils/cookie';
import commonStyles from '../commonStyles.module.css';


export const OrderDetailsPage: FC = () => {
    const dispatch = useDispatch();
    const location = useLocation<TLocationState>();
    const token = getCookie('token');
    const { wsConnected } = useSelector(store => store.ws);

    useEffect(() => {
        if (location.pathname.includes('/feed')) {
            dispatch(wsInitConnection());
        };
        if (location.pathname.includes('/profile/orders')) {
            dispatch(wsInitAuthConnection(token));
        };

        return () => {
            dispatch(wsCloseConnection());
        }
    }, [dispatch]);


    return (
        <main className={commonStyles.main}>
            {!wsConnected ? (
                <Loader size={'superLarge'} />
            ) : (
                <OrderDetails />
            )}
        </main>
    );
}
