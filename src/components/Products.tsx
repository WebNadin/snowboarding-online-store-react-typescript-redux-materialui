import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {myTheme} from "../styles/myTheme";
import data from "../data/data.json";

const Tools = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'flex-end',
    }}>
      <Box sx={{
        bgcolor: myTheme.dark.text.secondary
      }}>
        iconbutton + drawer showing by default and by click
      </Box>
      <Box sx={{
        ml: {
          xs: 0,
          sm: 2,
        },
        bgcolor: myTheme.dark.text.secondary
      }}>dropdown with several items</Box>
    </Box>
  )
}

const ProductsList = () => {
  const products = data.products;
  console.log("products =", products);
  return (
    <Box sx={{
      bgcolor: '#b9f1d4de',
      flexGrow: 1,
    }}>
      products test
    </Box>
  )
}
const Filters = () => {
  return (
    <Box sx={{
      bgcolor: myTheme.dark.background.secondary,
      color: myTheme.dark.text.contrast,
      width: '16em',
    }}>
      2 accordions (type and brand filters)with checkboxes in it
    </Box>
  )
}

const Products = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Tools />
        <Box sx={{
          display: 'flex',
        }}>
          <Filters />
          <ProductsList />
        </Box>
      </Container>
    </Box>
  )
}

export default Products;