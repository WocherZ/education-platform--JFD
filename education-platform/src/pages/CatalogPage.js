import React  from "react";
import {Typography } from "@mui/material";
import AppBar from "../components/AppBar";

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
    </>
  );
}

export default CatalogPage;
