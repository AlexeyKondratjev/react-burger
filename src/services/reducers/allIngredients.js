import {
  GET_ALL_INGREDIENTS_REQUEST,
  GET_ALL_INGREDIENTS_SUCCESS,
  GET_ALL_INGREDIENTS_FAILED
} from '../actions/allIngredients';


const initialState = {
  allIngredients: [],
  allIngredientsRequest: false,
  allIngredientsFailed: false
};



export const allIngredientsReducer = (state = initialState, action) => {
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
