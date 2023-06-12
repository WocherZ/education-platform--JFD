import React  from "react";
import BasicList from "../components/basicList";
import { Avatar, Grid, Typography } from "@mui/material";
import PrimarySearchAppBar from "../components/SearchBar";
// import ActionAreaCard from "../components/Card";
import ava from "../images/Ellipse5.png"

function SearchPage() {

  return (
    <div className="App">
     <Grid
        container
        direction="row"
        justifyContent="flex-start"
      alignItems="stretch"
    > 
      <Grid item xs={12} lg={3}>
        <BasicList/>
      </Grid>
      <Grid item xs={12} lg={6}>
        <PrimarySearchAppBar/>
        <Typography>
        Welcome back, Abiola!
        </Typography>
        <Typography>
        August 17, Wednesday
        </Typography>
        <Avatar  alt="Remy Sharp" src={ava} sx={{ width: 156, height: 156 }} />
      </Grid>
      <Grid item xs={12} lg={3}>
        <h2>Profile</h2>
      </Grid>

    </Grid>
    </div>
    
  );
}

export default SearchPage;
