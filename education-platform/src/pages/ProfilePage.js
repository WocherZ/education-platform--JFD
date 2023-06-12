import React  from "react";
import {Typography } from "@mui/material";
import avatar from "../images/Ellipse5.png"
import MyAppBar from "../components/AppBar";

function ProfilePage() {

  return (
    <>
    <MyAppBar
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
