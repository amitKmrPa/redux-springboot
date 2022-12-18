import { ADD_TO_CART } from "../Actions/ActionType";

const initialState = {
  addCart: [],
};

 const AddToCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addCart: action.payload,
      };
    default:
      return state;
  }
};
export default AddToCart;
