import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import burgerConstructorStyles from './BurgerConstructor.module.css';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorItem from '../BurgerConstructorItem/BurgerConstructorItem';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';

function BurgerConstructor(props) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <section className={`${burgerConstructorStyles.section} pt-25`}>

      <ul className={burgerConstructorStyles.positionsList}>

        <li className='ml-8 mr-4 mb-4'>
          {props.data.slice(0, 1).map(item => <ConstructorElement
            key={item._id}
            type="top"
            isLocked={true}
            text={`${item.name} (верх)`}
            price={item.price}
            thumbnail={item.image} />)}
        </li>

        <li>
          <ul className={burgerConstructorStyles.chosenPositionsList}>
            {props.data.slice(1).map(item => <BurgerConstructorItem data={item} key={item._id} />)}
          </ul>
        </li>

        <li className='mt-4 ml-8 mr-4'>
          {props.data.slice(0, 1).map(item => <ConstructorElement
            key={item._id}
            type="bottom"
            isLocked={true}
            text={`${item.name} (низ)`}
            price={item.price}
            thumbnail={item.image} />)}
        </li>

      </ul>

      <div className={`${burgerConstructorStyles.infoGroup} mt-10 mr-4`}>
        <div className={`${burgerConstructorStyles.priceGroup} mr-10`}>
          <p className='text text_type_digits-medium mr-5'>{610}</p>
          <CurrencyIcon type="primary" />
        </div>

        <Button type="primary" size="large" onClick={() => setIsOpened(true)}>Оформить заказ</Button>

        <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
          <OrderDetails
            orderId='034536'
            orderStatus='Ваш заказ начали готовить'
            orderInfoMessage='Дождитесь готовности на орбитальной станции'
          />
        </Modal>
      </div>

    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  })
  ).isRequired
}

export default BurgerConstructor;
