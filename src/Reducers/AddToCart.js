import { ADD_TO_CART } from "../Actions/ActionType";
import { GET_CART } from '../Actions/ActionType'
const initialState = {
  addCart: [],
  viewCart: []
};

const AddToCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addCart: action.payload,
      };
    case GET_CART:
      return {
        ...state,
        viewCart: action.payload,
      };
    default:
      return state;
  }
};
export default AddToCart;
