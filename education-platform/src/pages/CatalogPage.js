import React  from "react";
import {Typography } from "@mui/material";
import MyAppBar from "../components/AppBar";

function CatalogPage() {

  return (
    <>
    <MyAppBar
      isAuth={false}
      userName={null}
      userAvatar={null}
      notification={0}
      />
      <Typography>
      Каталог курсов
      </Typography>
    </>
  );
}

export default CatalogPage;
