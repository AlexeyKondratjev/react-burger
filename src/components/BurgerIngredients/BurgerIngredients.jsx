import React, { useEffect, useCallback } from 'react';
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../Ingredient/Ingredient';
import Loader from '../Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { USE_IN_VIEW_OPTIONS } from '../../utils/constants';
import { SET_MODAL, RESET_MODAL } from '../../services/actions/modal';



function BurgerIngredients() {
  const dispatch = useDispatch();

  const [current, setCurrent] = React.useState('bunTab');
  const { allIngredients, allIngredientsRequest } = useSelector(store => store.allIngredients);

  const getViewedIngredientData = useCallback(() => {
    dispatch({ type: SET_MODAL, payload: { content: 'ingredient' } });
  }, [dispatch]);

  /*   const removeViewedIngredientData = useCallback(() => {
      dispatch({ type: RESET_MODAL });
    }, [dispatch]); */

  const getFilteredIngredients = (data, filterCondition) => {
    const filtered = data.filter(item => item.type === filterCondition);

    return filtered.map(item =>
      <Ingredient
        data={item}
        key={item._id}
        onClick={() => { getViewedIngredientData() }}
      />);
  };


  const [bunListItemRef, bunListItemInView] = useInView(USE_IN_VIEW_OPTIONS);
  const [sauceListItemRef, sauceListItemInView] = useInView(USE_IN_VIEW_OPTIONS);
  const [mainListItemRef, mainListItemInView] = useInView(USE_IN_VIEW_OPTIONS);

  const inViewHandler = () => {
    switch (true) {
      case bunListItemInView: {
        setCurrent('bunTab');
        break;
      }
      case sauceListItemInView: {
        setCurrent('sauceTab');
        break;
      }
      case mainListItemInView: {
        setCurrent('mainTab');
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    inViewHandler();
  }, [bunListItemInView, sauceListItemInView, mainListItemInView]);

  return (
    <section className={burgerIngredientsStyles.section}>

      <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>

      <div className={`${burgerIngredientsStyles.tabs} mt-5 mb-10`}>
        <a href='#bunListItem' className={burgerIngredientsStyles.link}>
          <Tab value='bunTab' active={current === 'bunTab'} onClick={setCurrent}>
            Булки
          </Tab>
        </a>
        <a href='#sauceListItem' className={burgerIngredientsStyles.link}>
          <Tab value='sauceTab' active={current === 'sauceTab'} onClick={setCurrent}>
            Соусы
          </Tab>
        </a>
        <a href='#mainListItem' className={burgerIngredientsStyles.link}>
          <Tab value='mainTab' active={current === 'mainTab'} onClick={setCurrent}>
            Начинки
          </Tab>
        </a>
      </div>

      {allIngredientsRequest ? (<Loader size='superLarge' />)
        : (
          <ul className={burgerIngredientsStyles.categoryList} >
            <li id='bunListItem' ref={bunListItemRef}>
              <h2 className='text text_type_main-medium'>Булки</h2>
              <ul className={`${burgerIngredientsStyles.ingredientsList} mt-6 mb-10`}>
                {getFilteredIngredients(allIngredients, 'bun')}
              </ul>
            </li>
            <li id='sauceListItem' ref={sauceListItemRef}>
              <h2 className='text text_type_main-medium'>Соусы</h2>
              <ul className={`${burgerIngredientsStyles.ingredientsList} mt-6 mb-10`}>
                {getFilteredIngredients(allIngredients, 'sauce')}
              </ul>
            </li>
            <li id='mainListItem' ref={mainListItemRef}>
              <h2 className="text text_type_main-medium">Начинки</h2>
              <ul className={`${burgerIngredientsStyles.ingredientsList} mt-6 mb-10`}>
                {getFilteredIngredients(allIngredients, 'main')}
              </ul>
            </li>
          </ul>
        )}
    </section>
  );
}


export default BurgerIngredients;
