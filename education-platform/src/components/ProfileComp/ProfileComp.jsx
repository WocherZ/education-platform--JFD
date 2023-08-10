import React from "react";
import { Avatar, Link, Button, Divider, IconButton, OutlinedInput, InputLabel, InputAdornment, TextField, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import avatar from "./../../images/Ellipse5.png";
import "./ProfileComp.css";


export default function ProfileComp() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
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
                            <div><TextField label='Полное имя' variants='outlined' InputLabelProps={{ shrink: true }} /></div>
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
                                <TextField label="Возраст" type="number" InputLabelProps={{ shrink: true, }} />
                            </div>
                        </div>
                        <div id="rightDet">
                            <div><TextField label='Имя пользователя' variants='outlined' InputLabelProps={{ shrink: true }} /></div>
                            <div><TextField label='Электронная почта' variants='outlined' InputLabelProps={{ shrink: true }} /></div>
                            <div><TextField label="Телефон" type="text" InputLabelProps={{ shrink: true }} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} /></div>
                        </div>

                    </div>
                    <div id="compDet">
                        <div id="orgDet">
                            <div><TextField label='Организация/Учебное заведение' variants='outlined' InputLabelProps={{ shrink: true }} /></div>
                            <div><TextField label='Подразделение/Группа' variants='outlined' InputLabelProps={{ shrink: true }} /></div>

                        </div>
                        <div id="aboutDet">
                            <div>
                                <TextField label="О себе:" multiline rows={3} fullWidth InputLabelProps={{ shrink: true }} />
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
    )




}

