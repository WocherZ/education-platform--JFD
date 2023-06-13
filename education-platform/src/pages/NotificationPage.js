import React  from "react";
import {Typography } from "@mui/material";
import avatar from "../images/Ellipse5.png"
import AppBar from "../components/AppBar";

function NotificationPage() {

  return (
    <>
    <AppBar
      isAuth
      userName="Иван Иванов"
      userAvatar={avatar}
      notification={3}
      />
      <Typography>
      Уведомления, может быть добавим мессенджер
      </Typography>
    </>
  );
}

export default NotificationPage;
