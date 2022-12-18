import { REMOVE_FROM_CART } from "../Actions/ActionType";

const initialState = {
  removeData: [],
};

 const RemoveFromCart = (state = initialState, action) => {

  switch (action.type) {
    case REMOVE_FROM_CART:
      return {
        ...state,
        removeData: action.payload,
      };
    default:
      return state;
  }
};

export default RemoveFromCart;
