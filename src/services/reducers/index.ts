import { combineReducers } from '@reduxjs/toolkit';
import { allIngredientsReducer } from './allIngredients';
import { constructorIngredientsReducer } from './constructorIngredients';
import { orderDataReducer } from './orderData';
import { authReducer } from './auth';
import { modalReducer } from './modal';
import { wsReducer } from './webSocket';


export const rootReducer = combineReducers({
  allIngredients: allIngredientsReducer,
  constructorIngredients: constructorIngredientsReducer,
  orderData: orderDataReducer,
  auth: authReducer,
  modal: modalReducer,
  ws: wsReducer
});
