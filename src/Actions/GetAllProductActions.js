import { GET_PRODUCTS_DATA } from "./ActionType";
import api from "../Api/Api";
const GetAllProductActions = () => async (dispatch)=>{
    await api.get("/getAllProductsDetailsForReduxApp")
    .then((response) => {
      dispatch({type:GET_PRODUCTS_DATA,payload:response})
  });
  };

export default GetAllProductActions;