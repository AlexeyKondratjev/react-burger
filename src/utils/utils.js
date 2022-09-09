import { TOTAL_PRICE_INITIAL_STATE, ACTION_TYPE_SUM, ACTION_TYPE_RESET, INGREDIENT_TYPE_BUN } from './constants'; 

function totalPriceReducer(state, action) {
    if (!action.payload.length)
      return TOTAL_PRICE_INITIAL_STATE;
  
    switch (action.type) {
      case ACTION_TYPE_SUM:
        return {totalPrice: action.payload.reduce((sum, curr) => {
          return sum + (curr ? (curr.type === INGREDIENT_TYPE_BUN ? curr.price * 2 : curr.price) : 0) ;
        }, 0)};
      case ACTION_TYPE_RESET:
        return TOTAL_PRICE_INITIAL_STATE;
      default:
        throw new Error(`Wrong type of action: ${action.type}`);
    }
  };

export { totalPriceReducer };