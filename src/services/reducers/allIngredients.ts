import {
  GET_ALL_INGREDIENTS_REQUEST,
  GET_ALL_INGREDIENTS_SUCCESS,
  GET_ALL_INGREDIENTS_FAILED
} from '../actions/action-types/allIngredients';
import { TGetAllIngredientsActions } from '../types/actions';
import { TIngredient } from '../types/data';


export type TAllIngredientsState = {
  allIngredients: TIngredient[],
  allIngredientsRequest: boolean,
  allIngredientsFailed: boolean
}

const initialState: TAllIngredientsState = {
  allIngredients: [],
  allIngredientsRequest: false,
  allIngredientsFailed: false
};



export const allIngredientsReducer = (state = initialState, action: TGetAllIngredientsActions): TAllIngredientsState => {
  switch (action.type) {
    case GET_ALL_INGREDIENTS_REQUEST: {
      return {
        ...state,
        allIngredientsRequest: true
      }
    }
    case GET_ALL_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        allIngredientsRequest: false,
        allIngredientsFailed: false,
        allIngredients: action.items
      }
    }
    case GET_ALL_INGREDIENTS_FAILED: {
      return {
        ...state,
        allIngredientsRequest: false,
        allIngredientsFailed: true
      }
    }
    default: {
      return state;
    }
  };
};
