import React  from "react";
import { Link, Button, Divider, IconButton, OutlinedInput, InputLabel, InputAdornment, TextField, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import avatar from "../images/Ellipse5.png"
import AppBar from "../components/AppBar";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function ProfilePage() {
     
 
    return (

            

   
        <div>

            <AppBar
                isAuth
                userName="Иван Иванов"
                userAvatar={avatar}
                notification={3}
            />

            <ProfileComp         
                
                />


        
        </div>
    
    )




}

