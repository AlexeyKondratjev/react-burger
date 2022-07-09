import React from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../Ingredient/Ingredient';

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('one');

  const filteredData = (data, filterCondition) => {
    const filtered = data.filter(item => item.type === filterCondition);

    return filtered.map(item => <Ingredient data={item} key={item._id} />);
  };

  return (
    <section className={burgerIngredientsStyles.section}>

      <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>

      <div className={`${burgerIngredientsStyles.tabs} mt-5 mb-10`}>
        <a href='#' className={burgerIngredientsStyles.link}>
          <Tab value='one' active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
        </a>
        <a href='#' className={burgerIngredientsStyles.link}>
          <Tab value='two' active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
        </a>
        <a href='#' className={burgerIngredientsStyles.link}>
          <Tab value='three' active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </a>
      </div>

      <ul className={burgerIngredientsStyles.categoryList}>
        <li>
          <h2 className='text text_type_main-medium'>Булки</h2>
          <ul className={`${burgerIngredientsStyles.ingredientsList} mt-6 mb-10`}>
            {filteredData(props.data, 'bun')}
          </ul>
        </li>
        <li>
          <h2 className='text text_type_main-medium'>Соусы</h2>
          <ul className={`${burgerIngredientsStyles.ingredientsList} mt-6 mb-10`}>
            {filteredData(props.data, 'sauce')}
          </ul>
        </li>
        <li>
          <h2 className="text text_type_main-medium">Начинки</h2>
          <ul className={`${burgerIngredientsStyles.ingredientsList} mt-6 mb-10`}>
            {filteredData(props.data, 'main')}
          </ul>
        </li>
      </ul>

    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired
}

export default BurgerIngredients;
