import React from 'react';
import styles from './Order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientIcon } from '../IngredientIcon/IngredientIcon';
import { INGREDIENT_ICON_VIEWED_IN_ORDER_CARD_MAX } from '../../utils/constants';



export function Order({ id, date, name, price, arrTemp = [1, 2, 3, 4, 5, 6, 7] }) {

  const outputIngredientIcons = (array) => {
    return array.map((item, index) => {
      if (index < INGREDIENT_ICON_VIEWED_IN_ORDER_CARD_MAX) {
        return <li className={styles.listItem} key={index} style={{ left: index * 50, zIndex: array.length - index }}>
          <IngredientIcon ingredientId={item} />
        </li>
      } else if (index === INGREDIENT_ICON_VIEWED_IN_ORDER_CARD_MAX) {
        return <li className={styles.listItem} key={index} style={{ left: index * 50, zIndex: array.length - index }}>
          <IngredientIcon ingredientId={item} numberToRender={array.length - index}/>
        </li>
      } else return null;
    });
  };

  return (
    <li>
      <div className={`${styles.container} p-6 mb-4`}>

        <div className={`${styles.groupIdDate} mb-6`}>
          <p className="text text_type_digits-default">{`#${id}`}</p>
          <p className="text text_type_main-default text_color_inactive">{date}</p>
        </div>

        <p className="text text_type_main-medium mb-6">{name}</p>

        <div className={styles.groupImagesPrice}>
          <ul className={styles.list}>
            {outputIngredientIcons(arrTemp)}
          </ul>


          <div className={`${styles.groupPrice} pl-6`}>
            <p className="text text_type_digits-default">{price}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>

      </div>
    </li>
  );
}
