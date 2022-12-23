import { combineReducers } from 'redux';
import { allIngredientsReducer } from './allIngredients';
import { constructorIngredientsReducer } from './constructorIngredients';
import { viewedIngredientReducer } from './viewedIngredient';
import { orderDataReducer } from './orderData';
import { authReducer } from './auth';


export const rootReducer = combineReducers({
  allIngredients: allIngredientsReducer,
  constructorIngredients: constructorIngredientsReducer,
  viewedIngredient: viewedIngredientReducer,
  orderData: orderDataReducer,
  auth: authReducer
});
