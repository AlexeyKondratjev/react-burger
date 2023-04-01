import React, { FC, useEffect } from 'react';
import commonStyles from '../commonStyles.module.css';
import styles from './FeedPage.module.css';
import { OrdersList } from '../../components/OrdersList/OrdersList';
import { OrderStats } from '../../components/OrderStats/OrderStats';
import Loader from '../../components/Loader/Loader';
import { wsInitConnection, wsCloseConnection } from '../../services/actions/webSocket';
import { useDispatch, useSelector } from '../../services/hooks/hooks';



export const FeedPage: FC = () => {
  const dispatch = useDispatch();
  const { wsConnected } = useSelector(store => store.ws);

  useEffect(() => {
    dispatch(wsInitConnection());

    return () => {
      dispatch(wsCloseConnection());
    }
  }, [dispatch]);

  return (
    <main className={commonStyles.main}>

      <div className={styles.container}>
        {!wsConnected ? (
          <Loader size={'superLarge'} />
        ) : (
          <>
            <div className={`${styles.ordersListContainer} pl-5`}>
              <h1 className='text text_type_main-large mb-5'>Лента заказов</h1>

              <OrdersList />
            </div>

            <OrderStats />
          </>
        )}
      </div>

    </main>
  );
}
