import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import Box from "@mui/material/Box";
import Product from "./Product";

const Main = () => {
 return (
  <Box sx={{flex: "1 0 auto"}}>
      <Route exact path={`/`} component={Home} />
      <Route exact path={`/products`} component={Products} />
      <Route path={`/products/:id`} component={Product} />
      <Route path={`/about`} component={About} />
      <Route path={`/contact`} component={Contact} />
  </Box>
 )
}

export default Main;