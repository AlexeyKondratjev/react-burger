import React, { useState, useMemo } from 'react';
import burgerConstructorStyles from './BurgerConstructor.module.css';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorItem from '../BurgerConstructorItem/BurgerConstructorItem';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { useSelector, useDispatch } from 'react-redux';
import {
  ADD_BUN_TO_CONSTRUCTOR,
  ADD_STUFFING_ELEMENT_TO_CONSTRUCTOR,
  CONSTRUCTOR_CLEANUP
} from '../../services/actions/constructorIngredients';
import { getOrderData } from '../../services/actions/orderData';
import { useDrop } from "react-dnd";
import Loader from '../Loader/Loader';



function BurgerConstructor() {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const bunItem = useSelector(store => store.constructorIngredients.bun);
  const stuffingItems = useSelector(store => store.constructorIngredients.stuffing);
  const ingredientsId = useMemo(
    () => [bunItem, ...stuffingItems, bunItem].map(item => item ? item._id : ''),
    [bunItem, stuffingItems]
  );
  const { orderData, orderDataRequest } = useSelector(store => store.orderData);

  const getOrderDataFromBackend = (idArr) => {
    setIsOpened(true);
    dispatch(getOrderData(idArr));
  };

  const constructorCleanup = () => {
    setIsOpened(false);
    if (orderData.success) dispatch({ type: CONSTRUCTOR_CLEANUP });
  }

  const totalPrice = useMemo(() => {
    return (
      (Object.keys(bunItem).length > 0 ? bunItem.price * 2 : 0) +
      stuffingItems.reduce((sum, curr) => sum + curr.price, 0)
    );
  }, [bunItem, stuffingItems]);

  const [{ isHover }, dropRef] = useDrop({
    accept: "ingredients",
    drop(item) {
      item.type === "bun"
        ? dispatch({ type: ADD_BUN_TO_CONSTRUCTOR, payload: item })
        : dispatch({
          type: ADD_STUFFING_ELEMENT_TO_CONSTRUCTOR,
          payload: {
            ...item,
            id: Math.random().toString().slice(2)
          }
        });
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const chosenPositionsListScroll = stuffingItems && (stuffingItems.length >= 5) ?
    'chosenPositionsList_overflowY_scroll' :
    'chosenPositionsList_overflowY_hidden';



  return (
    <div className={`${burgerConstructorStyles.section} pt-25`}>

      <ul
        className={`${burgerConstructorStyles.positionsList} ${isHover ? burgerConstructorStyles.hoveredList : ''}`}
        ref={dropRef}
      >

        <li className={`${burgerConstructorStyles.lockedPosition} ml-8 mr-4 mb-4`}>
          {Object.keys(bunItem).length > 0 &&
            <ConstructorElement
              key={bunItem._id}
              type="top"
              isLocked={true}
              text={`${bunItem.name} (верх)`}
              price={bunItem.price}
              thumbnail={bunItem.image} />}
        </li>

        <li>
          <ul className={`${burgerConstructorStyles.chosenPositionsList} ${burgerConstructorStyles[chosenPositionsListScroll]}`}>
            {stuffingItems && stuffingItems.map((item, index) =>
              <BurgerConstructorItem data={item} index={index} key={item.id} />
            )}
          </ul>
        </li>

        <li className={`${burgerConstructorStyles.lockedPosition} mt-4 ml-8 mr-4`}>
          {Object.keys(bunItem).length > 0 &&
            <ConstructorElement
              key={bunItem._id}
              type="bottom"
              isLocked={true}
              text={`${bunItem.name} (низ)`}
              price={bunItem.price}
              thumbnail={bunItem.image} />
          }
        </li>

      </ul>

      <div className={`${burgerConstructorStyles.infoGroup} mt-10 mr-4`}>
        <div className={`${burgerConstructorStyles.priceGroup} mr-10`}>
          <p className='text text_type_digits-medium mr-5'>{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>

        <Button
          type="primary"
          size="large"
          disabled={(Object.keys(bunItem).length > 0) | (Object.keys(stuffingItems).length > 0) ? false : true}
          onClick={() => { getOrderDataFromBackend(ingredientsId) }}>
          Оформить заказ
        </Button>

        <Modal isOpened={isOpened} onClose={() => { constructorCleanup() }} >
          {orderDataRequest ? (<Loader size='superLarge' />) :
            orderData.success ? (
              <OrderDetails
                orderId={orderData.order.number.toString()}
                orderStatus='Ваш заказ начали готовить'
                orderInfoMessage='Дождитесь готовности на орбитальной станции'
              />) : (
              <OrderDetails
                orderId=''
                orderStatus='В процессе оформления заказа возникла ошибка'
                orderInfoMessage='Попробуйте оформить заказ позже'
              />
            )}
        </Modal>

      </div>

    </div>
  );
}

export default BurgerConstructor;
