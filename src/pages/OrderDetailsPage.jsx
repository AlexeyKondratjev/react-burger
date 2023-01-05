import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { OrderDetails } from '../components/OrderDetails/OrderDetails';
import { wsCloseConnection, wsInitAuthConnection, wsInitConnection } from '../services/actions/webSocket';
import { getCookie } from '../utils/cookie';
import commonStyles from './commonStyles.module.css';


export function OrderDetailsPage() {
    const dispatch = useDispatch();
    const location = useLocation();
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
