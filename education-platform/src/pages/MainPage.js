import React  from "react";
import {Typography, Button } from "@mui/material";
// import avatar from "../images/Ellipse5.png"
import AppBar from "../components/AppBar";
import { useNavigate } from 'react-router-dom';
import "../styles/main_page.css";

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
    <div className="main_top__wrapper">
      <div className="main_top__icons-wrapper">
        <div className="main_top__icons-wrapper-left">
          <div className="main_top__icons"></div>
          <div className="main_top__icons"></div>
          <div className="main_top__icons"></div>
        </div>
        <div className="hidden"></div>
      </div>

      <div className="main_top__brands">
        <div className="main_top__brands-wrapper">
          <div className="main_top__brand"></div>
          <div className="main_top__brand"></div>
          <div className="main_top__brand"></div>
          <div className="main_top__brand"></div>
          <div className="main_top__brand"></div>
          <div className="main_top__brand"></div>
        </div>
      </div>
      
      <div className="main_top">
        <div className="main_top__text">
          <Typography variant="text" className="main_top__text">
            Access Your Class 
          </Typography>
          <Typography variant="text" className="main_top__text main_top__text-blue">
            From Anywhere & Anytime
          </Typography>
        </div>
        <div className="main_top__image">
          
        </div>
      </div>
    </div>
    <AppBar
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
