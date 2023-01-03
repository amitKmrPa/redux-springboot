import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GetCart from "../Actions/GetCart";
export default function NavBar() {
    const state = useSelector((state)=>state)
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();
    const getCart=useDispatch();
    useEffect(() => {
        const uId = JSON.parse(localStorage.getItem('userId'));
        const uName = JSON.parse(localStorage.getItem('userName'));
        setUserId(uId);
        setUserName(uName);
    }, []);

    const Login = () => {
        navigate('/userLogin');
    }
    const signUp = () => {
        navigate('/signUp');
    }
    const logout = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        setUserId("");
        navigate('/');
        window.location.reload();
    }
    const navigateToHome = () => {
        navigate('/');
    }
    const cartNav = (e) => {
         getCart(GetCart(userId));
        if(userId){

        }else{
            alert("Please Login First!");
            e.preventDefault();
        }
    }
    return (
        <div
            style={{
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'left',
                height: '4rem',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    backgroundColor: 'black',
                    display: 'flex',
                    justifyContent: 'left',
                    height: '4rem',
                    alignItems: 'center',
                    width: '50%'
                }}
            >
                <NavLink to="/"
                    style={{
                        color: 'white',
                        marginLeft: '1rem',
                        textDecoration: 'none'
                    }}
                >Home</NavLink>
                <NavLink to="/viewCart"
                    style={
                        {
                            color: 'white',
                            marginLeft: '1rem',
                            textDecoration: 'none',
                        }}
                    onClick={cartNav}
                >Cart</NavLink>
            </div>
            <div
                style={{
                    backgroundColor: 'black',
                    display: 'flex',
                    justifyContent: 'right',
                    height: '4rem',
                    alignItems: 'center',
                    width: '50%'
                }}
            >

                {!userId &&
                    <Button
                        variant="contained"
                        color="warning"
                        className="nav-link"
                    onClick={signUp}
                    >Signup</Button>
                }
                {
                    !userId &&
                    <Button
                        variant="contained"
                        color="info"
                        className="nav-link"
                        onClick={Login}
                    >User Login</Button>
                }
                {
                    userId &&
                    <Button style={{ align: "right" }}
                        variant="contained"
                        color="secondary"
                        className="nav-link"
                        onClick={logout}>
                        Logout
                    </Button>
                }
            </div>
        </div>
    );
}