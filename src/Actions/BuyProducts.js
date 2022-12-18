import { BUY_PRODUCTS } from "./ActionType";
import api from "../Api/Api";

  const BuyProducts = (userId,productId,sellerId) =>(dispatch)=>{
    var data="";
    let formData = new FormData();
    formData.set('userId', userId);
    formData.set('productId', productId);
    formData.set('sellerId', sellerId);
     api.post("/getAllProductsDetailsForReduxAppToBuy/",formData).then(res => {
      data = res.data;
      if (data !=="") {
        return dispatch({type:BUY_PRODUCTS,payload:data}) 
      }
    })
  }
export default BuyProducts;