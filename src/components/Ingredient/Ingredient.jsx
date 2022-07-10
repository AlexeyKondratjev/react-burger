import React from 'react';
import PropTypes from 'prop-types';
import ingredientStyles from './Ingredient.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientType from '../../utils/types';

function Ingredient({ data, onClick }) {

  return (
    <>
      <li className={`${ingredientStyles.content} ml-2`} onClick={onClick}>
        <Counter count={0} size="default" className={ingredientStyles.counter} />
        <img src={data.image} alt={data.name} className={ingredientStyles.image} />

        <div className={`${ingredientStyles.priceGroup} mt-2 mb-2`}>
          <p className="text text_type_digits-default mr-2">{data.price}</p>
          <CurrencyIcon type="primary" />
        </div>

        <p className='text text_type_main-default'>{data.name}</p>
      </li>
    </>
  );
}

Ingredient.propTypes = { data: PropTypes.shape(ingredientType).isRequired };

export default Ingredient;
