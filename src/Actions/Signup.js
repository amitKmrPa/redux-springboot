import React from 'react';
import { SIGN_UP } from "./ActionType";
import api from "../Api/Api";
const Signup = (userName,userId,password,age,emailId,phone,gender) =>(dispatch)=>{
    var data="";
    let formData = new FormData();
    formData.set('userName', userName);
    formData.set('userId', userId);
    formData.set('userPassword', password);
    formData.set('age', age);
    formData.set('emailId', emailId );
    formData.set('phone', phone );
    formData.set('gender', gender );
     api.post("/registerForRedux/",formData).then(res => {
      data = res.data;
      if (data !=="") {
        return dispatch({type:SIGN_UP,payload:data}) 
      }
    })
}

export default Signup;