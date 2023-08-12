import React  from "react";
import {Typography, Button } from "@mui/material";
// import avatar from "../images/Ellipse5.png"
import AppBar from "../components/AppBar";
import Main from "../components/main_page/MainTop";
import { useNavigate } from 'react-router-dom';

const pages = [["/catalog", "Каталог", true],
              ["/learn", "Мое обучение", false],
              ["/study", "Преподавание", false],
              ["/profile", "Профиль", false],
              ["/notification", "Уведомления", false]
              ]

    
function MainPage() {
  const navigate = useNavigate()
  const menuPages = pages.map((item) =>  <Button
  key={item[0]}
  onClick={navigate.bind(this, item[0])}
  variant="h5"
  noWrap
  sx={{
    mr: 1,
    display: 'block' 
  }}>{item[1]} ( Показывает меню {!item[2] ? "авторизованного" : "неавторизованного"} пользователя)
  </Button>)


  return (
    <>
    <AppBar
      isAuth={false}
      userName={null}
      userAvatar={null}
      notification={0}
      />
      <Main></Main>
      <Typography variant="h3">
       HomePage
      </Typography>
      <Typography>
      Реклама
      Топ курсов
      и т/д/
      </Typography>
      <Typography variant="h3">
       Все страницы (для отладки)
      </Typography>
      {menuPages}
       
    </>
  );
}

export default MainPage;
