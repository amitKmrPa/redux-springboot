import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActions';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import BuyProducts from '../Actions/BuyProducts'
import SlideShow from "./SlideShow";
import AddToCart from '../Actions/AddToCart'
import NavBar from "../NavBar/NavBar";
function HomeComponent(props) {
    const state = useSelector((state) => state);
    const navigate = useNavigate();
    const buyProducts = useDispatch();
    const addToCart = useDispatch();
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");

    const buyProductFn = (productId, sellerId) => {
        if (userId) {
            buyProducts(BuyProducts(userId, productId, sellerId));
            navigate('/buyproducts');
        } else {
            alert("Please Login First!");
        }
    }
    const addToCartFn = (productId, sellerId) => {
        if (userId) {
            addToCart(AddToCart(productId, userId, sellerId));
            navigate('/addToCart');
        } else {
            alert("Please Login First!");
        }
    }
    useEffect(() => {
        const uId = JSON.parse(localStorage.getItem('userId'));
        const uName = JSON.parse(localStorage.getItem('userName'));
        setUserId(uId);
        setUserName(uName);
    }, []);

    return (<div>
        <NavBar />
        <div
            className="e-card e-card-horizontal"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: 'center',
                backgroundColor: '#e0f0c9',
                height: '500px',
            }}>
            <div style={{
                marginBottom: ' 0px'
            }} >
                <h2>WELCOME TO MY E-COMMERCE SITE</h2>
            </div>
            <div style={{
                color: 'cadetblue', display: 'flex',
                flexDirection: 'column',
                alignItems: "end",
                justifyContent: 'center', width: '100%'
            }}>
            </div>
            {/* <SlideShow /> */}
            <Grid sx={{ flexGrow: 1 }} container spacing={2}  >
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {state.allProduct.products.data &&
                            state.allProduct.products.data.map(
                                (element) => (
                                    <Grid key={element} item>
                                        <Card sx={{ maxWidth: 400 }} style={{
                                            backgroundColor: 'none'
                                        }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    alt="green iguana"
                                                    image={require('../Product/images/' + element.productImgId)}
                                                />
                                                <CardContent sx={{ minWidth: 145 }}>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {element.productName}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <label>Price: {element.price}</label>
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <label>only {element.quantity} left!</label>
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <label>Type: {element.productType}</label>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary" value={element.productId} onClick={() => buyProductFn(element.productId, element.sellerId)} >
                                                    Buy
                                                </Button>
                                                <Button size="small" color="primary" value={element.productId} onClick={() => addToCartFn(element.productId, element.sellerId)} >
                                                    Add to Cart
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
        </div>
    );
}

export default HomeComponent;