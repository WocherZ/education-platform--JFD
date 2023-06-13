import React  from "react";
import {Typography } from "@mui/material";
import avatar from "../images/Ellipse5.png"
import AppBar from "../components/AppBar";

function StudyPage() {

  return (
    <>
    <AppBar
      isAuth
      userName="Иван Иванов"
      userAvatar={avatar}
      notification={3}
      />
      <Typography>
      Дашборд преподавателя: текущие курсы, дедлайны, активность рейтинг, рекомендуемые курсы и т.д.
      <br/>
      Создание и редактирование курсов
      </Typography>
    </>
  );
}

export default StudyPage;
