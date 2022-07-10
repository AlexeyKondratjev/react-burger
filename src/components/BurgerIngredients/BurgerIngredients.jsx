import React from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../Ingredient/Ingredient';
import ingredientType from '../../utils/types';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('one');
  const [isOpened, setIsOpened] = React.useState(false);
  const [clickedIngredient, setClickedIngredient] = React.useState({});

  const getfilteredData = (data, filterCondition) => {
    const filtered = data.filter(item => item.type === filterCondition);

    return filtered.map(item =>
      <Ingredient
        data={item}
        key={item._id}
        onClick={() => {
          setIsOpened(true);
          setClickedIngredient(item);
        }}
      />);
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
            {getfilteredData(props.data, 'bun')}
          </ul>
        </li>
        <li>
          <h2 className='text text_type_main-medium'>Соусы</h2>
          <ul className={`${burgerIngredientsStyles.ingredientsList} mt-6 mb-10`}>
            {getfilteredData(props.data, 'sauce')}
          </ul>
        </li>
        <li>
          <h2 className="text text_type_main-medium">Начинки</h2>
          <ul className={`${burgerIngredientsStyles.ingredientsList} mt-6 mb-10`}>
            {getfilteredData(props.data, 'main')}
          </ul>
        </li>
      </ul>

      <Modal title='Детали ингредиента' isOpened={isOpened} onClose={() => setIsOpened(false)}>
        <IngredientDetails
          name={clickedIngredient.name}
          image={clickedIngredient.image_large}
          calories={clickedIngredient.calories}
          proteins={clickedIngredient.proteins}
          fats={clickedIngredient.fat}
          carbohydrates={clickedIngredient.carbohydrates}
        />
      </Modal>

    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape(ingredientType)
  ).isRequired
};

export default BurgerIngredients;
