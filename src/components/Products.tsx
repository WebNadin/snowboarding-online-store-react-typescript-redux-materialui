import React, { useEffect} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {myTheme} from "../styles/myTheme";
import {showProducts} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {IAppState} from "../redux/appReducer";
import {Loader} from "./Loader";
import Product from "./Product";
import {Button, Grid} from "@mui/material";
import {styled} from '@mui/material/styles';

const Tools = () => {
  return (
    <Box sx={{
      display: 'none',
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

interface IImage {
  origin: string,
  small?: string
}

export interface IProduct {
  id: number,
  title: string,
  type: string,
  price: number,
  rating?: number,
  img: IImage,
  sale: boolean,
  top: boolean,
  size: string[],
  originalUrl?: string,
}

interface IProducts {
  products: IProduct[]
}

export interface IState {
  productsReducer: IProducts,
  appReducer: IAppState
}

const OutlinedButton = styled(Button)(() => ({
  color: myTheme.dark.text.secondary,
  borderColor: myTheme.dark.text.secondary,
  '&:hover': {
    color: myTheme.dark.background.secondary,
    borderColor: myTheme.common.accent,
    backgroundColor: 'transparent',
  }
}));

const ProductsList = () => {

  const products = useSelector( (state: IState) => {
    return state.productsReducer.products;
  })
  const loading = useSelector( (state: IState) => {
    return state.appReducer.loading
  })
  if (loading){
    return <Loader />
  }

  return (
    <Box sx={{
    }}>
      <Grid container alignItems="stretch" spacing={2} sx={{
        flexGrow: 1,
      }}>
        {products.map((product: IProduct) => {
          return (
            <Grid item xs={6} sm={4} lg={3} key={product.id}>
              <Product product={product} />
            </Grid>
          )
        })}
      </Grid>
      <OutlinedButton
        variant="outlined"
        size='large'
        sx={{
          mt: 2, mb: 2,
          ml: 'auto', mr: 'auto',
          display: 'block',
      }}
      >Show More
      </OutlinedButton>
    </Box>
  )
}
const Filters = () => {
  return (
    <Box sx={{
      display: {
        xs: 'none',
        md: 'none',
      },
      bgcolor: myTheme.dark.background.secondary,
      color: myTheme.dark.text.contrast,
      width: '16em',
    }}>
      2 accordions (type and brand filters)with checkboxes in it
    </Box>
  )
}

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showProducts());
  });
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