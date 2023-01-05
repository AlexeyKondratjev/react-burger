import React from 'react';
import styles from './OrdersList.module.css';
import { Order } from '../Order/Order';
import { useSelector } from 'react-redux';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';



export function OrdersList({ renderStatus = false }) {
  const location = useLocation();
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
