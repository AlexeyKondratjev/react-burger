import React from 'react';
import ingredientStyles from './Ingredient.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Ingredient(props) {

  return (
    <li className={`${ingredientStyles.content} ml-2`}>
      <Counter count={0} size="default" className={ingredientStyles.counter}/>
      <img src={props.data.image} alt={props.data.name} className={ingredientStyles.image}/>

      <div className={`${ingredientStyles.priceGroup} mt-2 mb-2`}>
        <p className="text text_type_digits-default mr-2">{props.data.price}</p>
        <CurrencyIcon type="primary"/>
      </div>

      <p className='text text_type_main-default'>{props.data.name}</p>
    </li>
  );
}

export default Ingredient;
