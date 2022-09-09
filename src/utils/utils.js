import { TOTAL_PRICE_INITIAL_STATE } from './constants'; 

function totalPriceReducer(state, action) {
    if (!action.payload.length)
      return TOTAL_PRICE_INITIAL_STATE;
  
    switch (action.type) {
      case 'sum':
        return {totalPrice: action.payload.reduce((sum, curr) => {
          return sum + (curr.type === 'bun' ? curr.price * 2 : curr.price);
        }, 0)};
      case 'reset':
        return TOTAL_PRICE_INITIAL_STATE;
      default:
        throw new Error(`Wrong type of action: ${action.type}`);
    }
  };

export { totalPriceReducer };