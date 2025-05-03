import React from 'react'
import { 
  Box, 
  Typography, 
  Grid, 
  Button
} from '@mui/material'

const OrderSummary = ({ cartItems, subtotal, shipping, tax, total }) => {
  return (
    <Box>
      {/* Cart Items */}
      {cartItems.map((item) => (
        <Box key={item.id} sx={{ display: 'flex', mb: 4 }}>
          <Box
            component="img"
            src={item.image}
            alt={item.title}
            sx={{
              width: 100,
              height: 120,
              objectFit: 'cover',
              mr: 3
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="subtitle1" fontWeight="500">{item.title}</Typography>
              <Typography variant="subtitle1" fontWeight="500">x{item.quantity}</Typography>
            </Box>
            <Typography variant="subtitle1" fontWeight="500" sx={{ mb: 2 }}>${(item.price / 100).toFixed(2)}</Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">Color</Typography>
                <Typography variant="body2">{item.color}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">Size</Typography>
                <Typography variant="body2">{item.size}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      ))}
      
      {/* Order Summary */}
      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">Subtotal</Typography>
          <Typography variant="body1">${(subtotal / 100).toFixed(2)}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">Shipping</Typography>
          <Typography variant="body1">${(shipping / 100).toFixed(2)}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">Tax</Typography>
          <Typography variant="body1">${(tax / 100).toFixed(2)}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Typography variant="subtitle1" fontWeight="600">Total</Typography>
          <Typography variant="subtitle1" fontWeight="600">${(total / 100).toFixed(2)}</Typography>
        </Box>
      </Box>
      
      {/* Checkout Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{ 
          mt: 4, 
          py: 1.5,
          bgcolor: 'black',
          color: 'white',
          '&:hover': {
            bgcolor: '#333'
          }
        }}
      >
        CHECKOUT
      </Button>
      
      {/* Terms and Conditions */}
      <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary', textAlign: 'center' }}>
        *By continuing, you agree to<br />
        the terms and conditions
      </Typography>
    </Box>
  )
}

export default OrderSummary