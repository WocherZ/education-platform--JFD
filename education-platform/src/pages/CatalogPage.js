import React,  { useState, useEffect } from "react";
import {Grid, Typography, Paper, Container} from "@mui/material";
import AppBar from "../components/AppBar";
import Courses from "../components/Courses";


function CatalogPage() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
      const getData = async () => {
          const response = await fetch(
              `http://localhost:3001/api/course/`, {headers:
              {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNjg5NDI5NDE0fQ.5iyGE8rVx3kHLC93B0w29h1Ah4lZ1MMA35QAvAFORzU'}});
        
          const data = await response.json();
          console.log(data.result);
          setData(data.result);
      };
      getData();
  }, [])

  return (
    <>
    <AppBar
      isAuth={false}
      userName={null}
      userAvatar={null}
      notification={0}
      />
      <Typography>
      Каталог курсов
      </Typography>
      <Container>
        <Grid container spacing={3}
            display="flex"
            justify="center"

          >
          {data.map(course => (
            <Grid item key={course.id} xs={12} md={6} lg={4} align='center'>
              <Courses course={course}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default CatalogPage;
