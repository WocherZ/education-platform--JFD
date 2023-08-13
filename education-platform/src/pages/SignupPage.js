import React, {useState}  from "react";
import {
    Grid, 
    Paper, 
    Avatar, 
    TextField,  
    Button, 
    Typography, 
    Link, 
    Box,
    InputAdornment,
    InputLabel,
    IconButton,
    Input,
    Checkbox,
    Alert,
    Stack,
    FormControl,
} from "@mui/material";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// Material UI Icon Imports
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { fetchRegisterUser } from "../asyncAction/user";
import { useNavigate } from 'react-router-dom';

// Email Validation



// Validations

// Email Validation
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


const SignupPage=()=>{

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = React.useState(false);

    //Inputs
    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setPasswordInput] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
  
    // Inputs Errors
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordCheckError, setPasswordCheckError] = useState(false);
  
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
  
      //Show Successfull Submittion
      fetchRegisterUser(emailInput, passwordInput);
      navigate('/profile');
      setSuccess("Форма введена успешно");
      
    };
    
    const paperStyle={padding: "1rem", height: "100%", width: "20rem", margin: "1rem auto"}
    const avatarStyle={backgroundColor: '#1bbd7e'}
    return(
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
          <Grid> 
              <Paper elevation={10} style={paperStyle}>
                  <Grid align='center'> 
                      <Avatar style={avatarStyle}><AddCircleOutlineIcon></AddCircleOutlineIcon></Avatar>
                      <h2>Зарегистрироваться</h2>
                  </Grid>
                  <Grid container direction={"column"} justify = "center" spacing={3}>
                      <Grid item>
                          <TextField 
                              label="Email" 
                              placeholder="Введите почту" 
                              variant="outlined" 
                              fullWidth 
                              required
                              error={emailError}
                              id="standard-basic"
                              value={emailInput}
                              InputProps={{}}
                              onBlur={handleEmail}
                              onChange={(event) => {
                                setEmailInput(event.target.value);
                              }}
                    
                          />
                      </Grid>
                      <Grid item>
                          <FormControl sx={{ width: "100%" }} variant="outlined">
                              <InputLabel
                                  error={passwordError}
                                  htmlFor="standard-adornment-password"
                              >
                                  Пароль
                              </InputLabel>
                              <Input
                                  variant="outlined"
                                  padding ='1rem'
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
                          <Button 
                              type="submit" 
                              variant="contained" 
                              fullWidth
                              startIcon={<LoginIcon />}
                              onClick={handleSubmit}
                          >
                              Зарегистрироваться
                          </Button>
                      </Grid>
                      <Grid item>
                          <Typography>Уже зарегистрированы? <Link href="/login">Войти</Link></Typography>
                      </Grid>
                  </Grid>
              </Paper>
          </Grid>
      </Box>
                  
    )
}

export default SignupPage;