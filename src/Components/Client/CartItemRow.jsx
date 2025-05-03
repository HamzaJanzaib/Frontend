import React from 'react'
import { Box, Typography, IconButton, Grid, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CloseIcon from '@mui/icons-material/Close'

const CartItemRow = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <Box sx={{ 
      py: 3,
      borderBottom: '1px solid #eee',
      position: 'relative'
    }}>
      <Grid container spacing={2} alignItems="center">
        {/* Product Image and Info */}
        <Grid item xs={6} md={5}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: 90,
                height: 'auto',
                borderRadius: 1,
                mr: 2
              }}
            />
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                {item.category}
              </Typography>
              <Typography variant="subtitle1" fontWeight="500" sx={{ mb: 0.5 }}>
                {item.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                {item.color && (
                  <Typography variant="body2" color="text.secondary">
                    Color: <Box component="span" sx={{ fontWeight: 500 }}>• {item.color}</Box>
                  </Typography>
                )}
                {item.size && (
                  <Typography variant="body2" color="text.secondary">
                    Size: <Box component="span" sx={{ fontWeight: 500 }}>• {item.size}</Box>
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
        
        {/* Price */}
        <Grid item xs={2} md={2} sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle2" fontWeight="500">
            ${item.price.toFixed(2)}
          </Typography>
        </Grid>
        
        {/* Quantity */}
        <Grid item xs={2} md={2} sx={{ textAlign: 'center' }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <IconButton 
              size="small" 
              onClick={() => onDecrease?.(item.id)}
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
              {item.quantity}
            </Typography>
            <IconButton 
              size="small" 
              onClick={() => onIncrease?.(item.id)}
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
        <Grid item xs={2} md={3} sx={{ textAlign: 'right' }}>
          <Typography variant="subtitle1" fontWeight="600" color="warning.main">
            ${item.salePrice ? item.salePrice.toFixed(2) : (item.price * item.quantity).toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CartItemRow

