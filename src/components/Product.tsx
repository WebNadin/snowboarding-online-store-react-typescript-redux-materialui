import React from 'react'
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import {IProduct} from "./Products";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import {myTheme} from "../styles/myTheme";
import Divider from "@mui/material/Divider";

const Product = ({ product }: {product: IProduct}) => {
  return (
    <Card sx={{
      height: '100%',
      borderRadius: '0'
    }}>
      <CardContent>
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            mb: 2,
          }}
          alt={product.type}
          src={ require(`../images/products/${product.img.origin}`)}
        />
        <Divider />
        <Box sx={{
          position: 'relative',
          minHeight: '4.5em',
          display: 'flex',
          alignItems: 'center',
          ":hover .card-actions": {
            transform: 'translateY(0)',
            transition: 'transform .3s',
          }
        }}>
          <Typography variant="h6" component="div" sx={{
            pl: 12,
            pt: '0.3em', pb: '0.3em',
            fontSize: '0.9em',
            fontWeight: '600',
          }}>
            {product.title}
          </Typography>
          <Box component="div" sx={{
            position: 'absolute',
            left: '0.5em',
            top: '-1em',
            width: '4.5em',
            height: 'calc(100% + 10px)',
            backgroundColor: myTheme.common.accent,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: myTheme.dark.text.contrast,
            zIndex: 2,
          }}>
            ${product.price}
          </Box>
          <CardActions className='card-actions' sx={{
            position: 'absolute',
            right: '0',
            top: '0',
            backgroundColor: myTheme.light.background.primary,
            height: '100%',
            transform: 'translateY(100px)',
            transition: 'transform .3s',
            width: '100%',
            display: 'flex',
            boxSizing: 'border-box',
            pl: 12,
            zIndex: 1,
            justifyContent: 'flex-end',
          }}>
            <IconButton size="small">Learn More</IconButton>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Product;