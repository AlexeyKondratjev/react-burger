import React from 'react';
import PropTypes from 'prop-types';
import burgerConstructorStyles from './BurgerConstructor.module.css';
import { ConstructorElement, Button, CurrencyIcon, LockIcon, DragIcon, DeleteIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorItem from '../BurgerConstructorItem/BurgerConstructorItem';

function BurgerConstructor(props) {
  return (
    <section className={`${burgerConstructorStyles.section} pt-25`}>

      <ul className={burgerConstructorStyles.positionsList}>

        <li className='ml-8 mr-4 mb-4'>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${props.data[0].name} (верх)`}
            price={props.data[0].price}
            thumbnail={props.data[0].image}
          />
        </li>

        <li>
          <ul className={burgerConstructorStyles.chosenPositionsList}>
            {props.data.slice(1).map(item => <BurgerConstructorItem data={item} key={item._id} />)}
          </ul>
        </li>

        <li className='mt-4 ml-8 mr-4'>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${props.data[0].name} (низ)`}
            price={props.data[0].price}
            thumbnail={props.data[0].image}
          />
        </li>

      </ul>

      <div className={`${burgerConstructorStyles.infoGroup} mt-10 mr-4`}>
        <div className={`${burgerConstructorStyles.priceGroup} mr-10`}>
          <p className='text text_type_digits-medium mr-5'>{610}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" >
          Оформить заказ
        </Button>
      </div>

    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
  ).isRequired
}

export default BurgerConstructor;
