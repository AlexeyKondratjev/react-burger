import {
  GET_VIEWED_INGREDIENT,
  REMOVE_VIEWED_INGREDIENT
} from '../actions/viewedIngredient';

const initialState = {
  ingredientData: {}
};



export const viewedIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIEWED_INGREDIENT: {
      return {
        ingredientData: action.payload
      }
    }
    case REMOVE_VIEWED_INGREDIENT: {
      return initialState;
    }
    default: {
      return state;
    }
  };
};
