import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ingredientStyles from './Ingredient.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

function Ingredient(props) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <li className={`${ingredientStyles.content} ml-2`} onClick={() => setIsOpened(true)}>
        <Counter count={0} size="default" className={ingredientStyles.counter} />
        <img src={props.data.image} alt={props.data.name} className={ingredientStyles.image} />

        <div className={`${ingredientStyles.priceGroup} mt-2 mb-2`}>
          <p className="text text_type_digits-default mr-2">{props.data.price}</p>
          <CurrencyIcon type="primary" />
        </div>

        <p className='text text_type_main-default'>{props.data.name}</p>
      </li>
      <Modal title='Детали ингредиента' isOpened={isOpened} onClose={() => setIsOpened(false)}>
        <IngredientDetails
          name={props.data.name}
          image={props.data.image_large}
          calories={props.data.calories}
          proteins={props.data.proteins}
          fats={props.data.fat}
          carbohydrates={props.data.carbohydrates}
        />
      </Modal>
    </>
  );
}

Ingredient.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired
  }).isRequired
};

export default Ingredient;
