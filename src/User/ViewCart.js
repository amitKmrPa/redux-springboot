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
import SlideShow from "../Home/SlideShow";
import RemoveFromCart from "../Actions/RemoveFromCart";
import NavBar from "../NavBar/NavBar";

function ViewCart(props) {
    const state = useSelector((state) => state);
    const removeFromCart = useDispatch();
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [cartViewToggle, setCartViewToggle] = useState(1);
    const payFn = (productId, sellerId) => {
        alert(cartViewToggle);
    }
    useEffect(() => {
        const uId = JSON.parse(localStorage.getItem('userId'));
        const uName = JSON.parse(localStorage.getItem('userName'));
        setUserId(uId);
        setUserName(uName);
    }, []);

    const removeFn = (productId, sellerId) => {
        removeFromCart(RemoveFromCart(productId, sellerId, userId));
        setCartViewToggle(2);
    }
    return (<div>
        <NavBar />
        <div
            className="e-card e-card-horizontal"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: 'center',
            }}>
            {/* <SlideShow /> */}
            <h2>Your Kart</h2>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}  >
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {
                            state.CartData.viewCart &&
                            state.CartData.viewCart.map(
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
                                                    image={require('../Product/images/' + element[6])}
                                                />
                                                <CardContent sx={{ minWidth: 145 }}>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {element[1]}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <label>Price: {element[2]}</label>
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <label>only {element[0]} left!</label>
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <label>Type: {element[4]}</label>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary" value={element[3]} onClick={() => payFn(element[3], element[5])} >
                                                    Pay
                                                </Button>
                                                <Button size="small" color="primary" value={element[3]} onClick={() => removeFn(element[3], element[5])} >
                                                    Remove
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>

        </div>
    </div>
    );
}

export default ViewCart;