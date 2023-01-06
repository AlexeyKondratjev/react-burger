import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styles from './OrderDetails.module.css';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientIcon } from '../IngredientIcon/IngredientIcon';
import { useParams } from 'react-router-dom';
import { getOrderIngredients, getOrderPrice } from '../../utils/utils';
import { renderOrderStatus } from '../../utils/interface';


export function OrderDetails() {
  const { id } = useParams();

  const orders = useSelector(store => store.ws.orders);
  const order = orders?.find(item => item._id === id);
  
  /* const { number, name, status, ingredients, createdAt } = order; */

  const { allIngredients } = useSelector(store => store.allIngredients);

  const orderIngredients = useMemo(() => {
    return getOrderIngredients(order?.ingredients, allIngredients);
  }, [order?.ingredients, allIngredients]);

  const orderPrice = useMemo(() => {
    return getOrderPrice(orderIngredients);
  }, [orderIngredients]);

  //Получим массив уникальных значений ингредиентов.
  const uniqueIngredients = Array.from(new Set(orderIngredients));

  //Определим функцию для подсчета количества ингредиентов в заказе.
  const getIngredientCount = (ingredient) => {
    return orderIngredients.filter(item => {
      return item === ingredient;
    }).length;
  };

  if (!order) {
    return null;
  }

  return (
    <div className={`${styles.content} pt-10 pb-10`}>

      <div className={styles.idContainer}>
        <p className="text text_type_digits-default">{`#${order.number}`}</p>
      </div>

      <h1 className="text text_type_main-medium mt-10 mb-3">{order.name}</h1>

      {renderOrderStatus(order.status, `text text_type_main-default ${styles.addBox}`)}

      <p className="text text_type_main-medium mt-15 mb-6">{'Состав:'}</p>
      <ul className={styles.ingredientsList}>
        {uniqueIngredients.map((item, index) => <li className={`${styles.listItem} pb-4 pr-6`} key={index}>
          <div className={styles.groupIngredientIcoName}>
            <IngredientIcon ingredient={item} />
            <p className="text text_type_main-default pl-4 pr-4">{item.name}</p>
          </div>

          <div className={styles.container}>
            <p className={`${styles.price} text text_type_digits-default`}>{`${getIngredientCount(item)} x ${item.price.toLocaleString()}`}</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>)}
      </ul>

      <div className={`${styles.footerContainer}  pt-10`}>
        <p className={`${styles.dateTimezoneOffset} text text_type_main-default text_color_inactive`}>
          <FormattedDate date={new Date(order.createdAt)} />
          {` i-GMT+${-new Date(order.createdAt).getTimezoneOffset() / 60}`}
        </p>

        <div className={styles.container}>
          <p className={`${styles.price} text text_type_digits-default`}>{orderPrice.toLocaleString()}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>

    </div>
  );
}
