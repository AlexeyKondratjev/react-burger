import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorItemStyles from './BurgerConstructorItem.module.css';
import ingredientType from '../../utils/types';
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import {
  DELETE_STUFFING_ELEMENT_FROM_CONSTRUCTOR,
  REORDER_STUFFING_ELEMENTS
} from '../../services/actions/constructorIngredients';



function BurgerConstructorItem({ data, index }) {
  const dispatch = useDispatch();

  const { id } = data;
  const dndRef = useRef(null);

  const deleteItemHandle = (id) => {
    dispatch({ type: DELETE_STUFFING_ELEMENT_FROM_CONSTRUCTOR, id });
  };

  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: { id, index },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.3 : 1
    })
  });

  const [{ isHover }, dropRef] = useDrop({
    accept: "ingredient",
    hover(data) {
      if (!dndRef.current) return;

      const dragIndex = data.index;
      const dropIndex = index;

      dispatch({ type: REORDER_STUFFING_ELEMENTS, dragIndex, dropIndex});

      data.index = dropIndex;
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  dragRef(dropRef(dndRef));



  return (
    <li className={`${burgerConstructorItemStyles.listItem} ${isHover ? burgerConstructorItemStyles.hoveredItem : ''} mb-4 mr-2`}
      ref={dndRef}
      style={{opacity}}
    >
      <DragIcon type="primary" />
      <ConstructorElement text={data.name} price={data.price} thumbnail={data.image} handleClose={() => deleteItemHandle(id)} />
    </li>
  );
}



BurgerConstructorItem.propTypes = {
  data: PropTypes.shape(ingredientType),
  index: PropTypes.number
};



export default BurgerConstructorItem;
