import React  from "react";
import {Typography } from "@mui/material";
// import avatar from "../images/Ellipse5.png"
import MyAppBar from "../components/AppBar";

const pages = [["/catalog", "Каталог", true],
              ["/learn", "Мое обучение", false],
              ["/study", "Преподавание", false],
              ["/profile", "Профиль", false],
              ["/notification", "Уведомления", false]
              ]

const menuPages = pages.map((item) =>  <Typography
              key={item[0]}
              variant="h5"
              color="inherit"
              noWrap
              component="a"
              href={item[0]}
              sx={{
                mr: 1,
                display: 'block' 
              }}>{item[1]} ( Показывает меню {!item[2] ? "авторизованного" : "неавторизованного"} пользователя)}</Typography>)
    
function MainPage() {
  return (
    <>
    <MyAppBar
      isAuth={false}
      userName={null}
      userAvatar={null}
      notification={0}
      />
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
