import React, { FC, useRef } from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorItemStyles from './BurgerConstructorItem.module.css';
import { useDrag, useDrop } from "react-dnd";
import { DeleteStuffingElementFromConstructorAction, ReorderStuffingElementsAction } from '../../services/actions/constructorIngredients';
import { TBurgerConstructorItem } from '../../services/types/data';
import { useDispatch } from '../../services/hooks/hooks';



const BurgerConstructorItem: FC<TBurgerConstructorItem> = ({ data, index }) => {
  const dispatch = useDispatch();

  const { id } = data;
  const dndRef = useRef<HTMLLIElement>(null);

  const deleteItemHandle = (id: string) => {
    dispatch(DeleteStuffingElementFromConstructorAction(id));
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
    hover(data: TBurgerConstructorItem) {
      if (!dndRef.current) return;

      const dragIndex = data.index;
      const dropIndex = index;

      dispatch(ReorderStuffingElementsAction(dragIndex, dropIndex));

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



export default BurgerConstructorItem;
