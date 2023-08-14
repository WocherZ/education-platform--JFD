import { CssBaseline, Container, Typography } from '@mui/material';
import React from 'react';
import Cards from './Cards';

const styles = {
  container: {
    backgroundColor: '#FAFEFF',
    paddingTop: '70px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingBottom: '93px',
    textAlign: 'start',
  },
  header: {
    color: '#00ABBD',
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: 500,
  },
  text: {
    color: '#5F6368',
    fontFamily: 'Poppins',
    fontSize: '40px',
    fontWeight: 700,
    paddingTop: '10px',
  },
  link: {
    color: '#96989B',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 'normal',
    textDecoration: 'none',
  },
};

const Categories = () => {
  return (
    <>
      <CssBaseline />
      <div>
        <Container style={styles.container}>
          <Typography variant='h6' style={styles.header}>Popular Categories</Typography>
          <Typography variant='h3' style={styles.text}>Explore the most popular categories</Typography>
          <div style={{ padding: '17px 0 93px 0' }}>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'space-between' }}>
            <li><a href='#' style={styles.link}>Programming</a></li>
            <li><a href='#' style={styles.link}>Design</a></li>
            <li><a href='#' style={styles.link}>Bussiness</a></li>
            <li><a href='#' style={styles.link}>Lifestyle</a></li>
            <li><a href='#' style={styles.link}>Health & Fitness</a></li>
            <li><a href='#' style={styles.link}>Marketing</a></li>
            <li><a href='#' style={styles.link}>Music</a></li>
            <li><a href='#' style={styles.link}>Finance and Accounting</a></li>
            </ul>
          </div>
          <Cards />
        </Container>
      </div>
    </>
  );
}

export default Categories;

