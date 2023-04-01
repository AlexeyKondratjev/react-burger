import { TResetModalAction, TSetModalAction } from "../types/actions";
import { TModal } from "../types/data";
import { RESET_MODAL, SET_MODAL } from "./action-types/modal";



export const SetModalAction = (content: TModal): TSetModalAction => ({
  type: SET_MODAL,
  content
});

export const ResetModalAction = (): TResetModalAction => ({
  type: RESET_MODAL
});
