import React from 'react'
import { Box, Typography, Button, Divider } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const CartTotal = ({ subtotal, shipping = 'Free', discount = 0 }) => {
  const total = subtotal - discount
  
  return (
    <Box sx={{ bgcolor: '#FFF3D8', p: 3, borderRadius: 1 }}>
      <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>
        Cart Total
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body1">Cart Subtotal</Typography>
        <Typography variant="body1" fontWeight="500">
          ${subtotal.toFixed(2)}
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body1">Design by Fluttertop</Typography>
        <Typography variant="body1" fontWeight="500">
          {typeof shipping === 'number' ? `$${shipping.toFixed(2)}` : shipping}
        </Typography>
      </Box>
      
      {discount > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">Discount</Typography>
          <Typography variant="body1" fontWeight="500" color="error.main">
            -${discount.toFixed(2)}
          </Typography>
        </Box>
      )}
      
      <Divider sx={{ my: 2 }} />
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6" fontWeight="600">Cart Total</Typography>
        <Typography variant="h6" fontWeight="600">
          ${total.toFixed(2)}
        </Typography>
      </Box>
      
      <Button 
        variant="contained"
        fullWidth
        component={RouterLink}
        to="/checkout"
        sx={{ 
          bgcolor: '#fff',
          color: '#000',
          py: 1.5,
          fontWeight: 600,
          '&:hover': {
            bgcolor: '#f5f5f5'
          }
        }}
      >
        Apply
      </Button>
    </Box>
  )
}

export default CartTotal