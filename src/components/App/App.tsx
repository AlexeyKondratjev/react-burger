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
import { getUserData } from '../../services/actions/auth';
import { getAllIngredients } from '../../services/actions/allIngredients';
import { ResetModalAction } from '../../services/actions/modal';
import OrderInfo from '../OrderInfo/OrderInfo';
import { OrderDetails } from '../OrderDetails/OrderDetails';
import Loader from '../Loader/Loader';
import { ConstructorCleanUpAction } from '../../services/actions/constructorIngredients';
import { OrderDetailsPage } from '../../pages/OrderDetailsPage/OrderDetailsPage';
import { TLocationState } from '../../services/types/data';
import { useDispatch, useSelector } from '../../services/hooks/hooks';



export default function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation<TLocationState>();

  const background = location.state?.background;/* const background = location.state ? location.state.background : undefined; */

  const { isOpened, content } = useSelector(store => store.modal);
  const { orderData, orderDataRequest } = useSelector(store => store.orderData);


  useEffect(() => {
    dispatch(getUserData());
  },
    [dispatch]);

  useEffect(() => {
    dispatch(getAllIngredients())
  }, [dispatch]);


  const onIngredientModalClose = (background: { pathname: string }) => {
    dispatch(ResetModalAction());
    history.replace({ pathname: background.pathname });
  };

  const onOrderInfoModalClose = () => {
    dispatch(ResetModalAction());
    if (orderData.success) dispatch(ConstructorCleanUpAction());
  };

  const onOrderDetailsModalClose = () => {
    dispatch(ResetModalAction());
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

      {background &&
        <>
          <Route path='/ingredients/:id' exact={true}>
            <Modal title='Детали ингредиента' onClose={() => onIngredientModalClose(background)} >
              <IngredientDetails />
            </Modal>
          </Route>
          <ProtectedRoute path='/profile/orders/:id' exact={true}>
            <Modal onClose={() => onOrderDetailsModalClose()} >
              <OrderDetails />
            </Modal>
          </ProtectedRoute>
          <Route path='/feed/:id' exact={true}>
            <Modal onClose={() => onOrderDetailsModalClose()} >
              <OrderDetails />
            </Modal>
          </Route>
        </>
      }
      {isOpened && (content === 'orderInfo') &&
        < Modal onClose={() => onOrderInfoModalClose()} >
          {orderDataRequest ? (<Loader size='superLarge' />) :
            orderData.success ? (
              <OrderInfo
                orderId={orderData.order.number ? orderData.order.number.toString() : ''}
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
