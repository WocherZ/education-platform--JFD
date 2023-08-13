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

    const [showPassword, setShowPassword] = React.useState(false);

    const [UserData, setUserData] = React.useState([{
        id: 0, email: '1', role: '2', name: '3', surname: '4'
     }]);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

   // data = null;

    useEffect(() =>{ 
        const getUserData = async () => {
            const response = await fetch(`http://localhost:3001/api/user/${userId}`,{headers:
             {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNjg5NDI5NDE0fQ.5iyGE8rVx3kHLC93B0w29h1Ah4lZ1MMA35QAvAFORzU'}});
            const  data = await response.json();
            console.log(data.result);           
            setUserData(data.result);
        };
        getUserData();
    },[])
  console.log(UserData); 
  // console.log(UserData.surname);   
 
 //console.log(UserData.map(el => (el.surname)));

 console.log(UserData.name);


    return (
        <form>
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
                                <Button id="saveBtn" variant="contained">Сохранить</Button>
                            </div>
                            <div>
                                <Button id="CancelBtn" variant="text">Отменить</Button>
                            </div>
                        </div>
                    </div>

                    <div id="stdDet">
                        <div id="leftDet">
                            <div><TextField label='Фамилия пользователя' value={UserData.surname} //onChange={event => setUserData(event.target.value)} 
                            variants='outlined'  InputLabelProps={{ shrink: true }} /></div>
                            <div>
                                <FormControl>
                                    <FormLabel>Пол</FormLabel>
                                    <RadioGroup>
                                        <FormControlLabel value="Мужской" control={<Radio />} label="Мужской" />
                                        <FormControlLabel value="Женский" control={<Radio />} label="Женский" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div>
                                <TextField label="Возраст"  value={UserData.age}  type="number" InputLabelProps={{ shrink: true, }} />
                            </div>
                        </div>
                        <div id="rightDet">
                            <div><TextField label='Имя пользователя' value={UserData.name} variants='outlined' InputLabelProps={{ shrink: true }} /></div>
                            <div><TextField label='Электронная почта' value={UserData.email}  variants='outlined' InputLabelProps={{ shrink: true }} /></div>
                            <div><TextField label="Телефон" type="text"  value={UserData.phone}  InputLabelProps={{ shrink: true }} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} /></div>
                        </div>

                    </div>
                    <div id="compDet">
                        <div id="orgDet">
                            <div><TextField label='Организация/Учебное заведение'  value={UserData.organization}  variants='outlined' InputLabelProps={{ shrink: true }} /></div>
                            <div><TextField label='Подразделение/Группа'  value={UserData.department}  variants='outlined' InputLabelProps={{ shrink: true }} /></div>

                        </div>
                        <div id="aboutDet">
                            <div>
                                <TextField label="О себе:" value={UserData.aboutMe}   multiline rows={3} defaultValue={UserData} fullWidth InputLabelProps={{ shrink: true }} />
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

