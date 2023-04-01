import React, { FC } from 'react';
import styles from './OrdersList.module.css';
import { Order } from '../Order/Order';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { TLocationState, TOrdersListComponent } from '../../services/types/data';
import { useSelector } from '../../services/hooks/hooks';



export const OrdersList: FC<TOrdersListComponent> = ({ renderStatus = false }) => {
  const location = useLocation<TLocationState>();
  const { orders } = useSelector(store => store.ws);
  const match = useRouteMatch();

  return (
    <ul className={styles.list}>
      {orders && orders.map(item => {
        return (
          <Link to={{ pathname: `${match.path}/${item._id}`, state: { background: location } }} className={styles.link} key={item._id}>
            <Order data={item} renderStatus={renderStatus} />
          </Link>);
      })}
    </ul>
  );
};
