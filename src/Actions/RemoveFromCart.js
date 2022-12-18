import { REMOVE_FROM_CART } from "./ActionType";
import api from "../Api/Api";
const RemoveFromCart = (productId,sellerId,userId) =>(dispatch)=>{
    var data="";
    let formData = new FormData();
    formData.set('productId', productId);
    formData.set('sellerId', sellerId);
    formData.set('userId', userId);
     api.post("/removeFromKartForRedux/",formData).then(res => {
      data = res.data;
      if (data !=="") {
        return dispatch({type:REMOVE_FROM_CART,payload:data}) 
      }
    })
}


export default RemoveFromCart;