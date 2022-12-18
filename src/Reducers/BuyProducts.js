import { BUY_PRODUCTS } from "../Actions/ActionType";

const initialState = {
  buyProduct: [],
};

 const BuyProducts = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PRODUCTS:
      return {
        ...state,
        buyProduct: action.payload,
      };
    default:
      return state;
  }
};
export default BuyProducts;
