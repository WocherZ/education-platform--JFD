import '../../styles/reset.css';
import '../../styles/common.css';
import '../../styles/main_page.css';
import React from 'react';
import { Typography, Button } from "@mui/material";
import Checks from './Checks';
import Brands from './Brands';
import Social from './Social_networks';
import Categories from './Categories';
import { useNavigate } from 'react-router-dom';

import LineImage from '../../images/main/Line 10.svg';
import PhotoImage from '../../images/main/photo_top.png';

const styles = {
  mainTop: {
    position: 'relative',
    backgroundColor: '#F7F7F7',
    padding: '0 5%',
    fontWeight: '900',
    zIndex: '1',
  },
  mainTopHeader: {
    fontFamily: 'Nunito',
    fontWeight: '900',
    fontSize: '64px',
    minWidth: '750px',
    paddingTop: '50px',
    '@media (max-width: 768px)': {
        fontSize: '48px', // Adjust font size for smaller screens
        minWidth: 'auto', // Allow it to adapt naturally
    },
  },
  mainTopHeaderBlue: {
    color: '#00ABBD',
  },
  mainText: {
    color: '#96989B',
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: '600',
    lineHeight: '1.9',
    paddingTop: '24px',
  },
  mainTextLine: {
    backgroundImage: `url(${LineImage})`,
    width: '670px',
    height: '21px',
  },
  mainTopImage: {
    position: 'absolute',
    backgroundImage: `url(${PhotoImage})`,
    backgroundPosition: 'center center',
    width: '40%',
    minHeight: '60%',
    flexShrink: '0',
    top: '220px',
    right: '140px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    zIndex: '-1',
  },
  mainTopActions: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
   
    minWidth: '700px',
  },
  buttonTop: {
    listStyleType: 'none',
    width: '208px',
    height: '84px',
    flexShrink: '0',
    borderRadius: '49px',
    backgroundColor: '#FE7243',
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: '95%',
    fontWeight: '600',
    cursor: 'pointer',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#2980b9',
      color: 'black',
    },
    zIndex: '5',
  },
  links: {
    display: 'flex',
    paddingTop: '10px',
    paddingBottom: '100px',
    color: '#96989B',
    fontFamily: 'Poppins',
    fontSize: '17px',
    fontWeight: '600',
    lineHeight: '193.5%',
  },
  linksLink: {
    paddingLeft: '60px',
  },
  mediumBlock: {
    backgroundColor: '#FFF',
    minHeight: '282px',
  },
};

const Main = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/signup')
  }

  return (
    <section style={styles.main}>
      <div style={styles.mainTop}>
        <Checks />
        <Brands />
        <div style={styles.mainTopWrapper}>
          <Typography variant="text" style={styles.mainTopHeader}>
            Доступ к вашему уроку<br />
          </Typography>
          <Typography variant="text" style={{ ...styles.mainTopHeader, ...styles.mainTopHeaderBlue }}>
            В любом месте и в любое время
          </Typography>
          <div style={styles.mainText}>
            Решение для легкого и гибкого онлайн-обучения, вы можете учиться<br />в любом месте и в любое время на этой платформе.
          </div>
          <div style={styles.mainTextLine}></div>
          <div style={styles.mainTopImage}></div>
          <div style={styles.mainTopActions}>
            <Button style={styles.buttonTop} onClick={handleButtonClick}>Присоединиться бесплатно</Button>
          </div>
        </div>
        <Social />
        <div style={styles.links}>
          <div style={styles.linksLink}>Опытные инструкторы</div>
          <div style={styles.linksLink}>Качественные видео</div>
          <div style={styles.linksLink}>Доступные цены</div>
        </div>
      </div>
      <div style={styles.mediumBlock}></div>
      <Categories />
    </section>
  );
}

export default Main;
