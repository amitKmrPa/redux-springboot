import React from 'react';
import api from "../Api/Api";
import { ADD_TO_CART } from './ActionType';
const AddToCart = (productId,userId,sellerId) =>(dispatch)=>{
  var data="";
  let formData = new FormData();
  formData.set('productId', productId);
  formData.set('userId', userId);
  formData.set('sellerId', sellerId);
   api.post("/addToKartForRedux/",formData).then(res => {
    data = res.data;
    if (data !=="") {
      return dispatch({type:ADD_TO_CART,payload:data}) 
    }
  })
}

export default AddToCart;