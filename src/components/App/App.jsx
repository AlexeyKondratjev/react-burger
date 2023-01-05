import React, { useEffect } from 'react';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import {
  LoginPage,
  MainPage,
  RegistrationPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  NotFoundPage,
  OrdersPage,
  FeedPage
} from '../../pages/index';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../services/actions/auth';
import { getAllIngredients } from '../../services/actions/allIngredients';
import { RESET_MODAL } from '../../services/actions/modal';
import OrderInfo from '../OrderInfo/OrderInfo';
import { OrderDetails } from '../OrderDetails/OrderDetails';
import Loader from '../Loader/Loader';
import { CONSTRUCTOR_CLEANUP } from '../../services/actions/constructorIngredients';
import { OrderDetailsPage } from '../../pages/OrderDetailsPage';



export default function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const background = location.state?.background;

  const { isOpened, content } = useSelector(store => store.modal);
  const { orderData, orderDataRequest } = useSelector(store => store.orderData);

  useEffect(() => {
    dispatch(getUserData());
  },
    [dispatch]);

  useEffect(() => {
    dispatch(getAllIngredients())
  }, [dispatch]);

  const onIngredientModalClose = (background) => {
    dispatch({ type: RESET_MODAL });
    history.replace({ pathname: background.pathname });
  };

  const onOrderInfoModalClose = () => {
    dispatch({ type: RESET_MODAL });
    if (orderData.success) dispatch({ type: CONSTRUCTOR_CLEANUP });
  };

  const onOrderDetailsModalClose = () => {
    dispatch({ type: RESET_MODAL });
    history.replace({ pathname: background.pathname });
  };



  return (
    <div className={appStyles.page}>
      <AppHeader />

      <Switch location={background || location}>
        <Route path='/' exact={true}>
          <MainPage />
        </Route>
        <ProtectedRoute path='/login' exact={true} onlyUnAuth={true}>
          <LoginPage />
        </ProtectedRoute>
        <ProtectedRoute path='/register' exact={true} onlyUnAuth={true}>
          <RegistrationPage />
        </ProtectedRoute>
        <ProtectedRoute path='/forgot-password' exact={true} onlyUnAuth={true}>
          <ForgotPasswordPage />
        </ProtectedRoute>
        <ProtectedRoute path='/reset-password' exact={true} onlyUnAuth={true}>
          <ResetPasswordPage />
        </ProtectedRoute>
        <ProtectedRoute path='/profile' exact={true}>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path='/profile/orders' exact={true}>
          <OrdersPage />
        </ProtectedRoute>
        <ProtectedRoute path='/profile/orders/:id' exact={true}>
          <OrderDetailsPage />
        </ProtectedRoute>
        <Route path='/ingredients/:id' exact={true}>
          <IngredientDetails />
        </Route>
        <Route path='/feed' exact={true}>
          <FeedPage />
        </Route>
        <Route path='/feed/:id' exact={true}>
          <OrderDetailsPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>

      {background && (content === 'ingredient') &&
        (<Route path='/ingredients/:id' exact={true}>
          <Modal title='Детали ингредиента' onClose={() => onIngredientModalClose(background)} >
            <IngredientDetails />
          </Modal>
        </Route>)
      }
      {background &&
        (<ProtectedRoute path='/profile/orders/:id' exact={true}>
          <Modal onClose={() => onOrderDetailsModalClose(background)} >
            <OrderDetails />
          </Modal>
        </ProtectedRoute>)
      }
      {background && /* (content === 'orderDetails') && */
        (<Route path='/feed/:id' exact={true}>
          <Modal onClose={() => onOrderDetailsModalClose(background)} >
            <OrderDetails />
          </Modal>
        </Route>)
      }
      {isOpened && (content === 'orderInfo') &&
        < Modal onClose={() => onOrderInfoModalClose()} >
          {orderDataRequest ? (<Loader size='superLarge' />) :
            orderData.success ? (
              <OrderInfo
                orderId={orderData.order.number.toString()}
                orderStatus='Ваш заказ начали готовить'
                orderInfoMessage='Дождитесь готовности на орбитальной станции'
              />) : (
              <OrderInfo
                orderId=''
                orderStatus='В процессе оформления заказа возникла ошибка'
                orderInfoMessage='Попробуйте оформить заказ позже'
              />
            )}
        </Modal>}
    </div >
  );
}
