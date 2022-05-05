import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import Box from "@mui/material/Box";

const Main = () => {
 return (
  <Box sx={{flex: "1 0 auto"}}>
      <Route exact path={`/`} component={Home} />
      <Route path={`/products`} component={Products} />
      <Route path={`/about`} component={About} />
      <Route path={`/contact`} component={Contact} />
  </Box>
 )
}

export default Main;