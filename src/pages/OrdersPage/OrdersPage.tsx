import React, { FC, useEffect } from 'react';
import commonStyles from '../commonStyles.module.css';
import styles from './OrdersPage.module.css';
import { Navigation } from '../../components/Navigation/Navigation';
import { OrdersList } from '../../components/OrdersList/OrdersList';
import { wsInitAuthConnection, wsCloseConnection } from '../../services/actions/webSocket';
import { getCookie } from '../../utils/cookie';
import Loader from '../../components/Loader/Loader';
import { useDispatch, useSelector } from '../../services/hooks/hooks';


export const OrdersPage: FC = () => {
  const dispatch = useDispatch();
  const token = getCookie('token');
  const { wsConnected } = useSelector(store => store.ws);

  useEffect(() => {
    dispatch(wsInitAuthConnection(token));

    return () => {
      dispatch(wsCloseConnection());
    }
  }, [dispatch]);


  return (
    <main className={commonStyles.main}>
      <div className={styles.container}>
        <Navigation />

        <div className={styles.ordersListContainer}>
          {!wsConnected ? (
            <Loader size={'superLarge'} />
          ) : (
            <OrdersList renderStatus={true} />
          )}
        </div>
      </div>
    </main>
  );
}
