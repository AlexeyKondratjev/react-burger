import React from 'react';
import { useContext, useState, useMemo, useEffect } from 'react';
import burgerConstructorStyles from './BurgerConstructor.module.css';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorItem from '../BurgerConstructorItem/BurgerConstructorItem';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { getOrderData } from '../../utils/api';
import { ACTION_TYPE_SUM, INGREDIENT_TYPE_BUN } from '../../utils/constants';

import { IngredientsContext, TotalPriceContext } from '../../services/appContext';

function BurgerConstructor() {
  const [isOpened, setIsOpened] = useState(false);
  const { state, setState } = useContext(IngredientsContext);
  const { totalPriceState, totalPriceDispatcher } = useContext(TotalPriceContext);

  const bunItem = useMemo(
    () => state.data.find(item => item.type === INGREDIENT_TYPE_BUN),
    [state.data]
  );
  const detailsItems = useMemo(() => state.data.filter(item => item.type !== INGREDIENT_TYPE_BUN),
    [state.data]
  );

  useEffect(() =>
    totalPriceDispatcher({ type: ACTION_TYPE_SUM, payload: [bunItem, ...detailsItems] }),
    [bunItem, detailsItems]
  );

  useEffect(() => {
    const idArr = [bunItem, bunItem, ...detailsItems].map(item => item ? item._id : '');

    setState((prevState) => ({ ...prevState, ingredientsId: idArr }))
  },
    [state.data]
  );

  function getOrderDataFromBackend() {
    getOrderData(state.ingredientsId)
      .then(data => setState((prevState) => ({ ...prevState, orderData: data })))
      .catch(err => console.log(err));
  };


  return (
    <section className={`${burgerConstructorStyles.section} pt-25`}>

      <ul className={burgerConstructorStyles.positionsList}>

        <li className='ml-8 mr-4 mb-4'>
          {bunItem && <ConstructorElement
            key={bunItem._id}
            type="top"
            isLocked={true}
            text={`${bunItem.name} (верх)`}
            price={bunItem.price}
            thumbnail={bunItem.image} />}
        </li>

        <li>
          <ul className={burgerConstructorStyles.chosenPositionsList}>
            {detailsItems.map(item =>
              <BurgerConstructorItem data={item} key={item._id} />
            )}
          </ul>
        </li>

        <li className='mt-4 ml-8 mr-4'>
          {bunItem && <ConstructorElement
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
          <p className='text text_type_digits-medium mr-5'>{totalPriceState.totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>

        <Button type="primary" size="large" onClick={() => {
          setIsOpened(true);
          getOrderDataFromBackend();
        }}>Оформить заказ</Button>

        <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
          {state.orderData.success ? (
            <OrderDetails
              orderId={state.orderData.order.number.toString()}
              orderStatus='Ваш заказ начали готовить'
              orderInfoMessage='Дождитесь готовности на орбитальной станции'
            />) : (
            <OrderDetails
              orderId=''
              orderStatus='В процессе оформления заказа возникла ошибка'
              orderInfoMessage='Попробуйте оформить заказ позже'
            />)
          }
        </Modal>

      </div>

    </section>
  );
}

export default BurgerConstructor;
