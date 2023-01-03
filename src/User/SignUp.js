import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from '../NavBar/NavBar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { useSelector, useDispatch } from "react-redux";
import Signup from '../Actions/Signup';
import { useNavigate } from "react-router-dom";

const theme = createTheme();
function SignUp(props) {
    const state = useSelector((state) => state);
    const signUp = useDispatch();
    const navigate = useNavigate();

    var userId;
    var password;
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        userId = data.get('userId');
        password = data.get('password');
        const password2 = data.get('password2');
        const userName = data.get('userName');
        const age = data.get('age');
        const emailId = data.get('emailId');
        const phone = data.get('phone');
        const gender = data.get('radio-buttons-group');
        if (password === password2) {
            signUp(Signup(userName, userId, password, age, emailId, phone, gender));
            navigate('/userLogin');
        } else {
            alert("Password mis-matched");
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        User Registeration
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="User Name"
                            name="userName"
                            autoComplete="userName"
                            autoFocus
                        />

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormLabel>   Gender :
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </FormLabel>
                        </RadioGroup>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="ageId"
                            label="age"
                            name="age"
                            type="number"
                            autoComplete="ageId"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userId"
                            label="User Id"
                            name="userId"
                            autoComplete="userId"
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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password2"
                            label="Re Password"
                            type="password"
                            id="password2"
                            autoComplete="Re-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="emailId"
                            label="email"
                            type="email"
                            id="emailId"
                            autoComplete="emailId"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="phone"
                            label="phone"
                            type="number"
                            id="phone"
                            autoComplete="phone"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Already have an account? Login"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignUp;