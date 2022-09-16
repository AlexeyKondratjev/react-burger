import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ingredientStyles from './Ingredient.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientType from '../../utils/types';
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";



function Ingredient({ data, onClick }) {
  const bunItem = useSelector(store => store.constructorIngredients.bun);
  const stuffingItems = useSelector(store => store.constructorIngredients.stuffing);

  const counter = useMemo(() =>
    () => {
      let res = 0;

      if (data.type === 'bun') {
        if (bunItem._id === data._id) {
          res = 2;
        }
      } else {
        stuffingItems.forEach(item => {
          if (item._id === data._id) res++;
        });
      }

      return res;
    }, [bunItem, stuffingItems]);

  const [{ opacity }, dragRef] = useDrag({
    type: "ingredients",
    item: data,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.3 : 1
    }),
  });



  return (
    <li
      className={`${ingredientStyles.content} ml-2`}
      onClick={onClick}
      ref={dragRef}
      style={{opacity}}
    >
      {(counter() !== 0) && <Counter count={counter()} size="default" />}
      <img src={data.image} alt={data.name} className={ingredientStyles.image} />

      <div className={`${ingredientStyles.priceGroup} mt-2 mb-2`}>
        <p className="text text_type_digits-default mr-2">{data.price}</p>
        <CurrencyIcon type="primary" />
      </div>

      <p className='text text_type_main-default'>{data.name}</p>
    </li>
  );
}



Ingredient.propTypes = { data: PropTypes.shape(ingredientType).isRequired };



export default Ingredient;
