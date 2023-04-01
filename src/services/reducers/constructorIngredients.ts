import {
  ADD_BUN_TO_CONSTRUCTOR,
  ADD_STUFFING_ELEMENT_TO_CONSTRUCTOR,
  DELETE_STUFFING_ELEMENT_FROM_CONSTRUCTOR,
  REORDER_STUFFING_ELEMENTS,
  CONSTRUCTOR_CLEANUP
} from '../actions/action-types/constructorIngredients';
import { TConstructorIngredientsActions } from '../types/actions';
import { IExtendedIngredient, TIngredient } from '../types/data';



export type TConstructorState = {
  bun: TIngredient | null,
  stuffing: Array<IExtendedIngredient>
}


const initialState: TConstructorState = {
  bun: null,
  stuffing: []
};



export const constructorIngredientsReducer = (state = initialState, action: TConstructorIngredientsActions): TConstructorState => {
  switch (action.type) {
    case ADD_BUN_TO_CONSTRUCTOR: {
      return {
        ...state,
        bun: action.item
      }
    }
    case ADD_STUFFING_ELEMENT_TO_CONSTRUCTOR: {
      return {
        ...state,
        stuffing: [...state.stuffing, {...action.payload.item, id: action.payload.id}]
      }
    }
    case DELETE_STUFFING_ELEMENT_FROM_CONSTRUCTOR: {
      return {
        ...state,
        stuffing: [...state.stuffing].filter(item => item.id !== action.payload.id)
      }
    }
    case REORDER_STUFFING_ELEMENTS: {
      const reorderStuffing = [...state.stuffing];

      reorderStuffing.splice(
        action.payload.dragIndex,
        0,
        reorderStuffing.splice(action.payload.dropIndex, 1)[0]
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
