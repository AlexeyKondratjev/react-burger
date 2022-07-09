import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorItemStyles from './BurgerConstructorItem.module.css';

function BurgerConstructorItem(props) {
  return (
    <li className={`${burgerConstructorItemStyles.listItem} mb-4 mr-2`}>
      <DragIcon type="primary" />
      <ConstructorElement text={props.data.name} price={props.data.price} thumbnail={props.data.image} />
    </li>
  );
}

BurgerConstructorItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }
  ).isRequired
};

export default BurgerConstructorItem;
