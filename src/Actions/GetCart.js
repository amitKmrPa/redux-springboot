import React from 'react';
import api from '../Api/Api';
import { GET_CART } from './ActionType';
const GetCart = (userId)=>(dispatch)=> {
    var data="";
    api.get("/viewUserKartForRedux/"+userId).then(res => {
      data = res.data;
      if (data !=="") {
        return dispatch({type:GET_CART,payload:data}) 
      }else{
        alert("server side error"+data);
      }
    })
}

export default GetCart;