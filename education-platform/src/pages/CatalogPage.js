import React  from "react";
import {Grid, Typography } from "@mui/material";
import AppBar from "../components/AppBar";
import Courses from "../components/Courses";


function CatalogPage() {

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

      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <Paper> </Paper> 
        </Grid>

      </Grid>
      <Courses/>
      
    </>

    
  );
}

export default CatalogPage;
