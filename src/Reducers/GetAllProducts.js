import { GET_PRODUCTS_DATA } from "../Actions/ActionType";

const initialState = {
  products: [],
};

 const GetAllProducts = (state = initialState, action) => {

  switch (action.type) {
    case GET_PRODUCTS_DATA:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default GetAllProducts;
