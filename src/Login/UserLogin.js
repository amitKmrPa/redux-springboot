import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from "react-redux";
import userLogin from '../Actions/UserLogin';
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const theme = createTheme();
function UserLogin(props) {
  const state = useSelector((state) => state);
  const [landingMethod, setLandingMethod] = useState("normal")
  const navigate = useNavigate();
  var userId;
  var password;
  // console.log("=====77777======"+JSON.stringify(state.UserLoginData.signUp));
  const userLoginCall = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    userId = JSON.stringify(data.get('userId'));
    password = JSON.stringify(data.get('password'));
    userLoginCall(userLogin(userId, password));
  }
  if (state.UserLoginData.login.userId !== undefined) {
    localStorage.setItem('userId', JSON.stringify(state.UserLoginData.login.userId));
    localStorage.setItem('userName', JSON.stringify(state.UserLoginData.login.userName));
    navigate('/');
  } else if (state.UserLoginData.signUp === "Registration Successful !") {
    setLandingMethod("Registration")
    if (landingMethod === "Registration") {
      alert(state.UserLoginData.signUp);
    }
  } else if (state.UserLoginData.signUp === "Registration failed !") {
    alert(state.UserLoginData.signUp);
    // setLandingMethod("")
    navigate('/signUp');
  } else {
    navigate('/userLogin');
    setLandingMethod("normal")
  }
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            User Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userId"
              label="User Id"
              name="userId"
              autoComplete="userId"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              User Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default UserLogin;