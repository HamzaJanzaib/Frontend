import React from 'react'
import { Box, Typography, IconButton, Grid, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  // Default item if not provided
  const defaultItem = {
    id: 1,
    title: 'Floral Print Wrap Dress',
    category: 'WOMEN',
    price: 20.50,
    salePrice: 41.00,
    quantity: 2,
    image: '/book.png',
    color: 'Blue',
    size: '42'
  }

  // Use provided item or default
  const product = item || defaultItem
  
  return (
    <Box sx={{ 
      py: 3,
      borderBottom: '1px solid #eee'
    }}>
      <Grid container spacing={2} alignItems="center">
        {/* Product Image */}
        <Grid item xs={2} sm={1}>
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 1
            }}
          />
        </Grid>
        
        {/* Product Details */}
        <Grid item xs={10} sm={11}>
          <Grid container alignItems="center">
            {/* Product Info */}
            <Grid item xs={12} sm={6} md={7}>
              <Stack spacing={0.5}>
                <Typography variant="caption" color="text.secondary">
                  {product.category}
                </Typography>
                <Typography variant="subtitle1" fontWeight="500">
                  {product.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 0.5 }}>
                  {product.color && (
                    <Typography variant="body2" color="text.secondary">
                      Color: <Box component="span" sx={{ fontWeight: 500 }}>• {product.color}</Box>
                    </Typography>
                  )}
                  {product.size && (
                    <Typography variant="body2" color="text.secondary">
                      Size: <Box component="span" sx={{ fontWeight: 500 }}>• {product.size}</Box>
                    </Typography>
                  )}
                </Box>
              </Stack>
            </Grid>
            
            {/* Price */}
            <Grid item xs={4} sm={2} md={1} sx={{ textAlign: { xs: 'left', sm: 'center' } }}>
              <Typography variant="subtitle2" fontWeight="500">
                ${product.price.toFixed(2)}
              </Typography>
            </Grid>
            
            {/* Quantity */}
            <Grid item xs={4} sm={2} md={2} sx={{ textAlign: 'center' }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: { xs: 'flex-start', sm: 'center' }
              }}>
                <IconButton 
                  size="small" 
                  onClick={() => onDecrease?.(product.id)}
                  sx={{ 
                    border: '1px solid #e0e0e0',
                    borderRadius: '50%',
                    width: 24,
                    height: 24,
                    p: 0
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography sx={{ mx: 1.5, fontWeight: 500 }}>
                  {product.quantity}
                </Typography>
                <IconButton 
                  size="small" 
                  onClick={() => onIncrease?.(product.id)}
                  sx={{ 
                    border: '1px solid #e0e0e0',
                    borderRadius: '50%',
                    width: 24,
                    height: 24,
                    p: 0
                  }}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>
            
            {/* Total */}
            <Grid item xs={4} sm={2} md={2} sx={{ textAlign: { xs: 'right', sm: 'right' } }}>
              <Typography variant="subtitle1" fontWeight="600" color="primary.main">
                ${product.salePrice ? product.salePrice.toFixed(2) : (product.price * product.quantity).toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CartItem
