import React from 'react';
import styles from './Order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientIcon } from '../IngredientIcon/IngredientIcon';


export function Order({ id, date, name, price }) {
  return (
    <li>
      <div className={`${styles.container} p-6 mb-4`}>

        <div className={`${styles.groupIdDate} mb-6`}>
          <p className="text text_type_digits-default">{`#${id}`}</p>
          <p className="text text_type_main-default text_color_inactive">{date}</p>
        </div>

        <p className="text text_type_main-medium mb-6">{name}</p>

        <div className={styles.groupImagesPrice}>
          {/* ingr. pictures */}
          <IngredientIcon />
          <div className={`${styles.groupPrice} pl-6`}>
            <p className="text text_type_digits-default">{price}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>

      </div>
    </li>
  );
}
