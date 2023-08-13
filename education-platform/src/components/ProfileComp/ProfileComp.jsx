import React, { useEffect } from "react";
import { Avatar, Link, Button, Divider, IconButton, OutlinedInput, InputLabel, InputAdornment, TextField, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import avatar from "./../../images/Ellipse5.png";
import "./ProfileComp.css";
import { useSelector } from "react-redux";

export default function ProfileComp() {
	//Redux
    // const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isAuth);
    const userId = useSelector(state => state.user.userId);
    const token = useSelector(state => state.user.token);
    const port = 3001;
    const domain = 'localhost';
  //const isAuth = true;
  //const userId = 1;
  //const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNjg5NDI5NDE0fQ.5iyGE8rVx3kHLC93B0w29h1Ah4lZ1MMA35QAvAFORzU';

    console.log("ProfileComp" , {isAuth,userId, token});
    const [showPassword, setShowPassword] = React.useState(false);

    const [UserData, setUserData] = React.useState(
         {email: '', name: '', surname: '', age: '', gender: 'man', phone: '', organization:'', department: '', aboutMe: ''}    );

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();     
        fetch(`http://${domain}:${port}/api/user/${userId}`,
        {method: 'PUT',  
      //  mode: 'no-cors', 
        headers:
        {'Authorization': token,
        "Content-Type": 'application/json',
        'Accept': 'application/json'      
       /* "Origin":"http://localhost:3000",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods":"PUT",
    "Access-Control-Allow-Headers":"Content-Type,Authorization,Origin"   */},    
        body: JSON.stringify(UserData)        
        })
          .then((response) => response.json())
          .then((result) => {
            setUserData(result.result);
          });
      };

    useEffect(() =>{ 
        const getUserData = async () => {
            if (isAuth) {
                const response = await fetch(`http://${domain}:${port}/api/user/${userId}`,
                {headers:
                {'Authorization': token}});
                const  data = await response.json();
                console.log("data.result", data.result);           
                setUserData(data.result);
            }
        };
        getUserData();
    },[isAuth, userId, token])
  console.log(UserData); 
 console.log(UserData.name);

    return (
        <form   onSubmit={handleSubmit}>
        <div>
            <div id="setBack">
                <div id="setMain">
                    <div id="setHead">
                        <Typography variant="h5" gutterBottom>
                            <strong>Профиль пользователя</strong>
                        </Typography>
                    </div>
                    <Divider />
                    <div id="profileTop">
                        <div>
                            <Typography variant="h6" gutterBottom>
                                Персональные данные
                         </Typography></div>
                        <div id="photoArea" >
                            <div>
                                <Avatar alt="User_Avatar" src={avatar} sx={{ width: 100, height: 100 }} />
                            </div>
                            <div> <Link href="#">Изменить</Link></div>
                        </div>
                        <div id="buttonArea">
                            <div >
                                <Button id="saveBtn" type="submit" variant="contained">Сохранить</Button>
                            </div>
                            <div>
                                <Button id="CancelBtn" onClick={() => window.location.reload(false)} variant="text">Отменить</Button>
                            </div>
                        </div>
                    </div>

                    <div id="stdDet">
                        <div id="leftDet">
                            <div><TextField label='Фамилия пользователя' value={UserData.surname}                         
                           onChange={event => setUserData({...UserData, surname: event.target.value})} name="surname"
                            variants='outlined'  InputLabelProps={{ shrink: true }} /></div>
                            <div>
                                <FormControl>
                                    <FormLabel>Пол</FormLabel>
                                    <RadioGroup
                                       name="gender"
                                       value={UserData.gender}
                                       onChange={event => setUserData({...UserData, gender: event.target.value})}  >
                                        <FormControlLabel value="man" control={<Radio />} label="Мужской" />
                                        <FormControlLabel value="woman" control={<Radio />} label="Женский" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div>
                                <TextField label="Возраст" type="number" 
                                value={UserData.age} 
                                onChange={event => setUserData({...UserData, age: event.target.value})} name="age"
                                InputLabelProps={{ shrink: true, }} />
                            </div>
                        </div>
                        <div id="rightDet">
                            <div><TextField label='Имя пользователя' value={UserData.name} 
                             onChange={event => setUserData({...UserData, name: event.target.value})} name="name"
                             variants='outlined' InputLabelProps={{ shrink: true }} /></div>
                            <div><TextField label='Электронная почта'  value={UserData.email} 
                             onChange={event => setUserData({...UserData, email: event.target.value})} name="email"
                              variants='outlined' InputLabelProps={{ shrink: true }} /></div>
                            <div><TextField label="Телефон" type="text" value={UserData.phone}
                            onChange={event => setUserData({...UserData, phone: event.target.value})} name="phone"
                            InputLabelProps={{ shrink: true }} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} /></div>
                        </div>

                    </div>
                    <div id="compDet">
                        <div id="orgDet">
                            <div><TextField label='Организация/Учебное заведение' value={UserData.organization}
                            onChange={event => setUserData({...UserData, organization: event.target.value})} name="organization"
                             variants='outlined' InputLabelProps={{ shrink: true }} /></div>
                            <div><TextField label='Подразделение/Группа' value={UserData.department}
                            onChange={event => setUserData({...UserData, department: event.target.value})} name="department"
                             variants='outlined' InputLabelProps={{ shrink: true }} /></div>

                        </div>
                        <div id="aboutDet">
                            <div>
                                <TextField label="О себе:" multiline rows={3} value={UserData.aboutMe}
                                onChange={event => setUserData({...UserData, aboutMe: event.target.value})} name="aboutMe"
                                fullWidth InputLabelProps={{ shrink: true }} />
                            </div>
                        </div>

                    </div>
                    <Divider />


                    <div id="stdSecurityDet">
                        <div>
                            <Typography variant="h6" gutterBottom>
                                Сменить пароль:
                        </Typography>
                        </div>
                        <div id="securityDet">
                            <div>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Старый пароль</InputLabel>
                                    <OutlinedInput
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Старый пароль"
                                    />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Новый пароль</InputLabel>
                                    <OutlinedInput
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Новый пароль"
                                    />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Подтвердить</InputLabel>
                                    <OutlinedInput
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Подтвердить"
                                    />
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )




}

