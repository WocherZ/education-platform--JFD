import React  from "react";
import avatar from "../images/Ellipse5.png"
import AppBar from "../components/AppBar";
import ProfileComp from "../components/ProfileComp/ProfileComp";


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

