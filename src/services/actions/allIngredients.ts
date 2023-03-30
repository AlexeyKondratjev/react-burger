import { getAllIngredientsRequest } from '../../utils/api';
import { AppDispatch, AppThunk } from '../types';
import { TGetAllIngredientsFailedAction, TGetAllIngredientsRequestAction, TGetAllIngredientsSuccessAction } from '../types/actions';
import {
  GET_ALL_INGREDIENTS_REQUEST,
  GET_ALL_INGREDIENTS_SUCCESS,
  GET_ALL_INGREDIENTS_FAILED
} from '../../services/actions/action-types/allIngredients';
import { TIngredient } from '../types/data';



export const GetAllIngredientsRequestAction = (): TGetAllIngredientsRequestAction => ({
  type: GET_ALL_INGREDIENTS_REQUEST
});

export const GetAllIngredientsSuccessAction = (items: TIngredient[]): TGetAllIngredientsSuccessAction => ({
  type: GET_ALL_INGREDIENTS_SUCCESS,
  items
});

export const GetAllIngredientsFailedAction = (): TGetAllIngredientsFailedAction => ({
  type: GET_ALL_INGREDIENTS_FAILED
});



export const getAllIngredients: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch(GetAllIngredientsRequestAction());

    getAllIngredientsRequest().then(res => {
      if (res && res.success) {
        dispatch(GetAllIngredientsSuccessAction(res.data));
      } else {
        dispatch(GetAllIngredientsFailedAction());
      }
    });
}
