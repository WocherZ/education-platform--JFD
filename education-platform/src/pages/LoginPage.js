import React, {useState} from "react";
import {
    Grid, 
    Paper, 
    Avatar, 
    TextField, 
    FormControlLabel, 
    Checkbox, 
    Button, 
    Typography, 
    Link,
    InputLabel,
    Input,
    InputAdornment,
    IconButton,  
    FormControl,
    Stack,
    Alert,
    
} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { fetchLoginUser } from "../asyncAction/user";
// Email Validation
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


const LoginPage=()=>{
    //Redux
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isAuth);
    const userLogin = (email, password) => {
        dispatch(fetchLoginUser({email, password}));
    }
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = React.useState(false);

    //Inputs
    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setPasswordInput] = useState();
    const [rememberMe, setRememberMe] = useState();
  
    // Inputs Errors
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
  
    // Overall Form Validity
    const [formValid, setFormValid] = useState();
    const [success, setSuccess] = useState();
  
    // Handles Display and Hide Password
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    // Label for Checkbox
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
  
    // Validation for onBlur Email
    const handleEmail = () => {
      console.log(isEmail(emailInput));
      if (!isEmail(emailInput)) {
        setEmailError(true);
        return;
      }
  
      setEmailError(false);
    };
  
    // Validation for onBlur Password
    const handlePassword = () => {
      if (
        !passwordInput ||
        passwordInput.length < 5 ||
        passwordInput.length > 20
      ) {
        setPasswordError(true);
        return;
      }
  
      setPasswordError(false);
    };
  
    //handle Submittion
    const handleSubmit = () => {
      setSuccess(null);
      //First of all Check for Errors
  
      // If Email error is true
      if (emailError || !emailInput) {
        setFormValid("Email введен не правильно, введите заново");
        return;
      }
  
      // If Password error is true
      if (passwordError || !passwordInput) {
        setFormValid(
          "Пароль должен содержать 5 - 20 символов, введите заново"
        );
        return;
      }
      setFormValid(null);
  
      // Proceed to use the information passed
      console.log("Email : " + emailInput);
      console.log("Password : " + passwordInput);
      console.log("Remember : " + rememberMe);
  
      //Show Successfull Submittion
      setSuccess("Форма введена успешно");
      userLogin(emailInput, passwordInput);
      navigate('/profile');
    };

    const paperStyle={padding: "1rem", height: "100%", width: "20rem", margin: "1rem auto"}
    const avatarStyle={backgroundColor: '#1bbd7e'}
    return(
        <Grid> 
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'> 
                    <Avatar style={avatarStyle}><LockIcon></LockIcon></Avatar>
                    <h2>Войти</h2>
                </Grid>
                <Grid container direction={"column"} spacing={3}>
                    <Grid item>
                        <TextField 
                            label="  Email" 
                            placeholder="Введите почту" 
                            error={emailError}
                            value={emailInput}
                            inputProps={{}}
                            id="standart-basic" 
                            type="email" 
                            variant="outlined" 
                            fullWidth 
                            required
                            onBlur={handleEmail}
                            onChange={(event) => {
                                setEmailInput(event.target.value);
                            }} 
                        />
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth >
                            <InputLabel
                                padding="0"
                                required
                                error={passwordError}
                                htmlFor="standard-adornment-password"
                            >
                            Пароль
                            </InputLabel>
                            <Input
                                placeholder="Введите пароль" 
                                error={passwordError}
                                onBlur={handlePassword}
                                id="standard-adornment-password"
                                type={showPassword ? "text" : "password"}
                                onChange={(event) => {
                                setPasswordInput(event.target.value);
                                }}
                                value={passwordInput}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name=""
                                    color="primary"
                                    {...label}
                                    size="small"
                                    onChange={(event) => setRememberMe(event.target.checked)}                              
                                /> 
                            }
                            label="Запомнить"                           
                        />
                    </Grid>
                    <Grid item>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            fullWidth
                            startIcon={<LoginIcon />}
                            onClick={handleSubmit}
                            >
                            Войти
                        </Button>
                    </Grid>

                    {/* Show Form Error if any */}
                    {formValid && (
                        <Stack  sx={{padding: "1rem" }} spacing={2}>
                        <Alert severity="error" size="small">
                            {formValid}
                        </Alert>
                        </Stack>
                    )}

                    {/* Show Success if no issues */}
                    {success && (
                        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
                        <Alert severity="success" size="small">
                            {success}
                        </Alert>
                        </Stack>
                    )}
                    <Grid item>
                        <Typography>
                            <Link href="#">
                                Забыли пароль
                            </Link>
                        </Typography>
                    </Grid>
                                        
                    <Grid item>
                        <Typography>Еще не зарегестрированы?
                            <Link href="/signup">
                                Зарегестрироваться
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default LoginPage;