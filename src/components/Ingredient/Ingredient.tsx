import React, { useMemo, FC } from 'react';
import styles from './Ingredient.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredientComponent } from '../../services/types/data';
import { useDrag } from "react-dnd";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/hooks/hooks';



const Ingredient: FC<TIngredientComponent> = ({ data, onClick }) => {
  const location = useLocation();

  const bunItem = useSelector(store => store.constructorIngredients.bun);
  const stuffingItems = useSelector(store => store.constructorIngredients.stuffing);

  const counter = useMemo(() =>
    () => {
      let res = 0;

      if (data.type === 'bun') {
        if (bunItem && bunItem._id === data._id) {
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
    <Link to={{ pathname: `/ingredients/${data._id}`, state: { background: location } }} className={styles.link}>
      <li
        className={`${styles.content} ml-2`}
        onClick={onClick}
        ref={dragRef}
        style={{ opacity }}
      >
        {(counter() !== 0) && <Counter count={counter()} size="default" />}
        <img src={data.image} alt={data.name} className={styles.image} />

        <div className={`${styles.priceGroup} mt-2 mb-2`}>
          <p className="text text_type_digits-default mr-2">{data.price}</p>
          <CurrencyIcon type="primary" />
        </div>

        <p className='text text_type_main-default'>{data.name}</p>
      </li>
    </Link>
  );
}



export default Ingredient;
