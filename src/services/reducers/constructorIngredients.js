import {
  ADD_BUN_TO_CONSTRUCTOR,
  ADD_STUFFING_ELEMENT_TO_CONSTRUCTOR,
  DELETE_STUFFING_ELEMENT_FROM_CONSTRUCTOR,
  REORDER_STUFFING_ELEMENTS,
  CONSTRUCTOR_CLEANUP
} from '../actions/constructorIngredients';


const initialState = {
  bun: {},
  stuffing: []
};



export const constructorIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN_TO_CONSTRUCTOR: {
      return {
        ...state,
        bun: action.payload
      }
    }
    case ADD_STUFFING_ELEMENT_TO_CONSTRUCTOR: {
      return {
        ...state,
        stuffing: [...state.stuffing, action.payload]
      }
    }
    case DELETE_STUFFING_ELEMENT_FROM_CONSTRUCTOR: {
      return {
        ...state,
        stuffing: [...state.stuffing].filter(item => item.id !== action.id)
      }
    }
    case REORDER_STUFFING_ELEMENTS: {
      const reorderStuffing = [...state.stuffing];

      reorderStuffing.splice(
        action.dragIndex,
        0,
        reorderStuffing.splice(action.dropIndex, 1)[0]
      );

      return {
        ...state,
        stuffing: reorderStuffing
      }
    }
    case CONSTRUCTOR_CLEANUP: {
      return initialState;
    }
    default: {
      return state;
    }
  };
};
