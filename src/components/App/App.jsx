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
  OrdersPage
} from '../../pages/index';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, updateToken } from '../../services/actions/auth';
import { getAllIngredients } from '../../services/actions/allIngredients';
import { RESET_MODAL } from '../../services/actions/modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { CONSTRUCTOR_CLEANUP } from '../../services/actions/constructorIngredients';
import Loader from '../Loader/Loader';



export default function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const background = location.state?.background;

  const { getUserDataFailed, getUserDataMessage } = useSelector(store => store.auth);
  const { isOpened, content } = useSelector(store => store.modal);
  const { orderData, orderDataRequest } = useSelector(store => store.orderData);

  useEffect(() => {
    dispatch(getUserData());
  },
    [dispatch]);

  useEffect(() => {
    dispatch(getAllIngredients())
  }, [dispatch]);

  useEffect(() => {
    if (getUserDataFailed && getUserDataMessage === 'Ошибка 403') {
      console.log('User data fetch error. Need to update access token!');

      dispatch(updateToken());
      dispatch(getUserData());
    }
  },
    [getUserDataFailed, getUserDataMessage]);

  const onIngredientModalClose = (background) => {
    dispatch({ type: RESET_MODAL });
    history.replace({ pathname: background.pathname })
  };

  const onOrderModalClose = () => {
    dispatch({ type: RESET_MODAL });
    if (orderData.success) dispatch({ type: CONSTRUCTOR_CLEANUP });
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
        <Route path='/ingredients/:id' exact={true}>
          <IngredientDetails />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>

      {background &&
        (<Route path='/ingredients/:id'>
          <Modal title='Детали ингредиента' onClose={() => onIngredientModalClose(background)} >
            <IngredientDetails />
          </Modal>
        </Route>)
      }
      {isOpened && (content === 'order') &&
        < Modal onClose={() => onOrderModalClose()} >
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
        </Modal>}
    </div >
  );
}
