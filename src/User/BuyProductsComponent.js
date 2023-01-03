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
function BuyProductsComponent(props) {
    const state = useSelector((state) => state);
    if(state.BuyProductsData.buyProduct.length !==0){
        
        // console.log(state.BuyProductsData.buyProduct[0]));
    }

    const buyProduct = (productId,sellerId) => {
    }
    return (
        <div
        className="e-card e-card-horizontal"
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: 'center',
        }}>
               {/* <SlideShow /> */}

 <Grid sx={{ flexGrow: 1 }} container spacing={2}  >
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    {state.BuyProductsData.buyProduct.length !==0  &&
     
                                <Grid  item>
                                    <Card sx={{ maxWidth: 400 }} style={{
                                        backgroundColor: 'none'
                                    }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                alt="green iguana"
                                                image={require('../Product/images/' + state.BuyProductsData.buyProduct[0][6])}
                                            /> 
                                             <CardContent sx={{ minWidth: 145 }}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {state.BuyProductsData.buyProduct[0][1]}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <label>Price: {state.BuyProductsData.buyProduct[0][2]}</label>
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <label>only {state.BuyProductsData.buyProduct[0][0]} left!</label>
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <label>Type: {state.BuyProductsData.buyProduct[0][4]}</label>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                             <Button size="small" color="primary" style={{}} value={state.BuyProductsData.buyProduct[0][3]} onClick={() => buyProduct(state.BuyProductsData.buyProduct[0][3],state.BuyProductsData.buyProduct[0][5])} >
                                                Pay
                                            </Button> 
                                            <Button size="small" color="primary"  >
                                               Cancel
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                           }
                </Grid>
            </Grid>
        </Grid> 
    </div>
    );
}

export default BuyProductsComponent;