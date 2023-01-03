import React, { useEffect, useState } from "react";
import './App.css';
import HomeComponent from './Home/HomeComponent';
import GetAllProductActions from "./Actions/GetAllProductActions";
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import UserLogin from './Login/UserLogin';
import BuyProductsComponent from "./User/BuyProductsComponent";
import CartComponent from "./User/CartComponent";
import NavBar from "./NavBar/NavBar";
import ViewCart from "./User/ViewCart";
import SignUp from "./User/SignUp";
function App() {
  const state = useSelector((state) => state);
  const getAllProducts = useDispatch();
    useEffect(() => {
      getAllProducts(GetAllProductActions());
    }, [])

  return (
    <Router>
      <Routes>
      <Route path={'/'} element={<HomeComponent />} />
      <Route path={'/userLogin'} element={<UserLogin />} />
      <Route path={'/buyproducts'} element={<BuyProductsComponent />} />
      <Route path={'/addToCart'} element={<CartComponent />} />
      <Route path={'/viewCart'} element={<ViewCart />} />
      <Route path={'/signUp'} element={<SignUp />} />
      </Routes>
    </Router>
   
  );
}

export default App;
