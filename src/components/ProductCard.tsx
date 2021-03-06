import React from 'react'
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import {IProduct} from "./Products";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import {myTheme} from "../styles/myTheme";
import Divider from "@mui/material/Divider";
import VisibilityOutlined from '@material-ui/icons/VisibilityOutlined';
import StarBorderOutlined from '@material-ui/icons/StarBorderOutlined';
import ShareOutlined from '@material-ui/icons/ShareOutlined';
import AddShoppingCartOutlined from '@material-ui/icons/AddShoppingCartOutlined';

const ProductCard = ({ product }: {product: IProduct}) => {

  const SaleSign = () => {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: '1em',
        top: 0,
        width: '70px',
        height: '70px',
        backgroundColor: myTheme.common.error,
        color: myTheme.dark.text.contrast,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: 600,
      }}>
        sale
      </Box>
    )
  }
  const NewSign = () => {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: '1em',
        top: 0,
        width: '70px',
        height: '70px',
        backgroundColor: myTheme.dark.background.primary,
        color: myTheme.dark.text.contrast,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: '0.7em',
        textAlign: 'center',
      }}>
        new arrival
      </Box>
    )
  }

  return (
    <Card sx={{
      height: '100%',
      borderRadius: '0',
      p: 0,
    }}>
      <CardContent sx={{p: 0}}>
        <Box sx={{position: 'relative'}}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              boxSizing: 'border-box',
              mb: 2,
              p: 2,
            }}
            alt={product.type}
            src={ require(`../images/products/${product.img.origin}`)}
          />
          {product.sale && <SaleSign />}
          {product.new && <NewSign />}
        </Box>
        <Divider />
        <Box sx={{
          position: 'relative',
          minHeight: '4.5em',
          display: 'flex',
          alignItems: 'center',
          pl: 1, pr: 1,
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
            pl: 12, pb: 0,
            zIndex: 1,
            justifyContent: 'center',
          }}>
            <IconButton
              href={`./products/${product.id}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="visibility"
              sx={{
                transition: 'color .3s',
                '&:hover': {
                  color: myTheme.common.accent,
                  backgroundColor: 'transparent',
                  transition: 'color .3s',
              }}
            }>
              <VisibilityOutlined  fontSize="inherit" />
            </IconButton>
            <IconButton
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="rating"
              disabled
              sx={{
                transition: 'color .3s',
                pl:0,
                '&:hover': {
                  color: myTheme.common.accent,
                  backgroundColor: 'transparent',
                  transition: 'color .3s',
                }}
              }>
              <StarBorderOutlined  fontSize="inherit" />
            </IconButton>
            <IconButton
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="share"
              disabled
              sx={{
                transition: 'color .3s',
                pl:0,
                '&:hover': {
                  color: myTheme.common.accent,
                  backgroundColor: 'transparent',
                  transition: 'color .3s',
                }}
              }>
              <ShareOutlined  fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="add-to-cart"
              sx={{
                transition: 'color .3s',
                '&:hover': {
                  color: myTheme.common.accent,
                  backgroundColor: 'transparent',
                  transition: 'color .3s',
                }}
              }>
              <AddShoppingCartOutlined  fontSize="inherit" />
            </IconButton>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProductCard;