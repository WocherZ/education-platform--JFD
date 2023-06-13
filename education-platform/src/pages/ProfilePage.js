import React  from "react";
import {Typography } from "@mui/material";
import avatar from "../images/Ellipse5.png"
import AppBar from "../components/AppBar";

function ProfilePage() {

  return (
    <>
    <AppBar
      isAuth
      userName="Иван Иванов"
      userAvatar={avatar}
      notification={3}
      />
      <Typography>
      Профиль пользователя
      Персональные данные и прочее ....
      </Typography>
    </>
  );
}

export default ProfilePage;
