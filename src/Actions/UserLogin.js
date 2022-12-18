import React from 'react';
import { USER_LOGIN } from "./ActionType";
import api from "../Api/Api";
const UserLogin = (userId,userPassword) =>(dispatch)=>{
    var data="";
    let formData = new FormData();
    formData.set('userId', userId);
    formData.set('userPassword', userPassword);
     api.post("/userLoginForReact/",formData).then(res => {
      data = res.data;
      if (data !=="") {
        return dispatch({type:USER_LOGIN,payload:data}) 
      }
    })
}

export default UserLogin;