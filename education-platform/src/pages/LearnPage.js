import React  from "react";
import { Typography } from "@mui/material";
import avatar from "../images/Ellipse5.png"
import AppBar from "../components/AppBar";

function LearnPage() {

  return (
    <>
    <AppBar
      isAuth
      userName="Иван Иванов"
      userAvatar={avatar}
      notification={3}
      />
      <Typography>
      Дашборд ученика: текущие курсы, дедлайны, активность рейтинг, рекомендуемые курсы и т..
      </Typography>
    </>
  );
}

export default LearnPage;
