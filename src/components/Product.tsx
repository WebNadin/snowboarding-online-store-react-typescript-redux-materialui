import React from 'react'
import {Card, CardContent, Typography} from "@mui/material";
import {IProduct} from "./Products";

const Product = ({ product }: {product: IProduct}) => {
  return (
    <Card sx={{
      height: '100%',
      borderRadius: '0'
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          userId: {product.id}
        </Typography>
        <Typography variant="h5" component="div">
          {product.title}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Product;