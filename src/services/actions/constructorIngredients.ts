import {
  ADD_BUN_TO_CONSTRUCTOR,
  ADD_STUFFING_ELEMENT_TO_CONSTRUCTOR,
  DELETE_STUFFING_ELEMENT_FROM_CONSTRUCTOR,
  REORDER_STUFFING_ELEMENTS,
  CONSTRUCTOR_CLEANUP
} from './action-types/constructorIngredients';
import { TIngredient } from '../types/data';
import {
  TAddBunToConstructorAction,
  TAddStuffingElementToConstructorAction,
  TDeleteStuffingElementFromConstructorAction,
  TReorderStuffingElementsAction,
  TConstructorCleanUpAction
} from '../types/actions';



export const AddBunToConstructorAction = (item: TIngredient): TAddBunToConstructorAction => ({
  type: ADD_BUN_TO_CONSTRUCTOR,
  item
});

export const AddStuffingElementToConstructorAction = (item: TIngredient, id: string): TAddStuffingElementToConstructorAction => ({
  type: ADD_STUFFING_ELEMENT_TO_CONSTRUCTOR,
  payload: { item, id }
});

export const DeleteStuffingElementFromConstructorAction = (id: string): TDeleteStuffingElementFromConstructorAction => ({
  type: DELETE_STUFFING_ELEMENT_FROM_CONSTRUCTOR,
  payload: { id }
});

export const ReorderStuffingElementsAction = (dragIndex: number, dropIndex: number): TReorderStuffingElementsAction => ({
  type: REORDER_STUFFING_ELEMENTS,
  payload: { dragIndex, dropIndex }
});

export const ConstructorCleanUpAction = (): TConstructorCleanUpAction => ({
  type: CONSTRUCTOR_CLEANUP
});
