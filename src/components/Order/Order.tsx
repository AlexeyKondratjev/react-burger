import React, { FC, useCallback, useMemo } from 'react';
import styles from './Order.module.css';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientIcon } from '../IngredientIcon/IngredientIcon';
import { INGREDIENT_ICON_VIEWED_IN_ORDER_CARD_MAX } from '../../utils/constants';
import { SetModalAction } from '../../services/actions/modal';
import { getOrderIngredients, getOrderPrice } from '../../utils/utils';
import { renderOrderStatus } from '../../utils/interface';
import { TIngredient, TOrderComponent } from '../../services/types/data';
import { useDispatch, useSelector } from '../../services/hooks/hooks';



export const Order: FC<TOrderComponent> = ({ data, renderStatus = false }) => {
  const dispatch = useDispatch();

  const { number, createdAt, name, status, ingredients } = data;
  const { allIngredients } = useSelector(store => store.allIngredients);

  const orderIngredients = useMemo(() => {
    return getOrderIngredients(ingredients, allIngredients);
  }, [ingredients, allIngredients]);

  const orderPrice = useMemo(() => {
    return getOrderPrice(orderIngredients);
  }, [orderIngredients]);


  const outputIngredientIcons = (array: (TIngredient | undefined)[]) => {
    return array.map((item, index) => {
      if (index < INGREDIENT_ICON_VIEWED_IN_ORDER_CARD_MAX) {
        return <li className={styles.listItem} key={index} style={{ left: index * 48, zIndex: array.length - index }}>
          <IngredientIcon ingredient={item!} />
        </li>
      } else if (index === INGREDIENT_ICON_VIEWED_IN_ORDER_CARD_MAX) {
        return <li className={styles.listItem} key={index} style={{ left: index * 48, zIndex: array.length - index }}>
          <IngredientIcon ingredient={item!} numberToRender={array.length - index} />
        </li>
      } else return null;
    });
  };

  const onOrderClick = useCallback(() => {
    dispatch(SetModalAction('orderDetails'));
  }, [dispatch]);



  return (
    <li className='mr-2' onClick={onOrderClick}>
      <div className={`${styles.container} p-6 mb-4`}>

        <div className={`${styles.groupIdDate} mb-6`}>
          <p className="text text_type_digits-default">{`#${number}`}</p>
          <div className='text text_type_main-default text_color_inactive'>
            <p className={styles.dateTimezoneOffset}>
              <FormattedDate date={new Date(createdAt)} />
              {` i-GMT+${-new Date(createdAt).getTimezoneOffset() / 60}`}
            </p>
          </div>
        </div>

        <p className='text text_type_main-medium'>{name}</p>

        {renderStatus && renderOrderStatus(status, 'text text_type_main-default mt-2')}

        <div className={`${styles.groupImagesPrice} mt-6`}>
          <ul className={styles.list}>
            {outputIngredientIcons(orderIngredients)}
          </ul>

          <div className={`${styles.groupPrice} pl-6`}>
            <p className="text text_type_digits-default pr-2">{orderPrice.toLocaleString()}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>

      </div>
    </li>
  );
}
