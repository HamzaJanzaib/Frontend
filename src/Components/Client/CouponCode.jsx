import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'

const CouponCode = ({ onApply }) => {
  const [couponCode, setCouponCode] = useState('')

  const handleApply = () => {
    if (onApply && couponCode) {
      onApply(couponCode)
    }
  }

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>
        Coupon Code
      </Typography>
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Design by Fluttertop
      </Typography>
      
      <TextField
        placeholder="Coupon Code"
        fullWidth
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        sx={{ 
          mb: 2,
          bgcolor: '#f5f5f5',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent'
          }
        }}
      />
      
      <Button
        variant="contained"
        fullWidth
        onClick={handleApply}
        sx={{ 
          bgcolor: '#000',
          color: '#fff',
          py: 1.5,
          '&:hover': {
            bgcolor: '#333'
          }
        }}
      >
        Apply
      </Button>
    </Box>
  )
}

export default CouponCode