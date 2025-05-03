import React from 'react'
import { 
  Box, 
  Typography, 
  Grid, 
  TextField, 
  Button
} from '@mui/material'
import { styled } from '@mui/material/styles'

// Custom styled TextField
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
      borderRadius: 0,
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
  '& .MuiInputBase-input': {
    height: '1.4375em',
  },
}));

// Shipping method button
const ShippingMethodButton = ({ label, selected, onClick }) => (
  <Button 
    variant={selected ? 'contained' : 'outlined'}
    onClick={onClick}
    sx={{ 
      borderColor: 'black', 
      color: selected ? 'white' : 'black',
      bgcolor: selected ? 'black' : 'transparent',
      '&:hover': {
        bgcolor: selected ? 'black' : 'rgba(0,0,0,0.04)',
        borderColor: 'black'
      }
    }}
  >
    {label}
  </Button>
);

// Payment method button
const PaymentMethodButton = ({ label, selected, onClick }) => (
  <Button 
    variant={selected ? 'contained' : 'outlined'}
    onClick={onClick}
    sx={{ 
      borderColor: 'black', 
      color: selected ? 'white' : 'black',
      bgcolor: selected ? 'black' : 'transparent',
      '&:hover': {
        bgcolor: selected ? 'black' : 'rgba(0,0,0,0.04)',
        borderColor: 'black'
      }
    }}
  >
    {label}
  </Button>
);

const CheckoutForm = ({ shippingMethod, setShippingMethod, paymentMethod, setPaymentMethod }) => {
  return (
    <Grid container spacing={3}>
      {/* First Name & Last Name */}
      <Grid item xs={6}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          First Name
        </Typography>
        <StyledTextField 
          fullWidth 
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Last Name
        </Typography>
        <StyledTextField 
          fullWidth 
          variant="outlined"
          size="small"
        />
      </Grid>
      
      {/* Address */}
      <Grid item xs={12}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Address
        </Typography>
        <StyledTextField 
          fullWidth 
          variant="outlined"
          size="small"
        />
      </Grid>
      
      {/* City & Country */}
      <Grid item xs={6}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          City
        </Typography>
        <StyledTextField 
          fullWidth 
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Country
        </Typography>
        <StyledTextField 
          fullWidth 
          variant="outlined"
          size="small"
        />
      </Grid>
      
      {/* Postal Code & Phone */}
      <Grid item xs={6}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Postal Code
        </Typography>
        <StyledTextField 
          fullWidth 
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Phone Number
        </Typography>
        <StyledTextField 
          fullWidth 
          variant="outlined"
          size="small"
        />
      </Grid>
      
      {/* Shipping Method */}
      <Grid item xs={12} sx={{ mt: 1 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Select Shipping Method
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <ShippingMethodButton 
            label="SAME DAY" 
            selected={shippingMethod === 'same-day'} 
            onClick={() => setShippingMethod('same-day')} 
          />
          <ShippingMethodButton 
            label="NEXT DAY" 
            selected={shippingMethod === 'next-day'} 
            onClick={() => setShippingMethod('next-day')} 
          />
          <ShippingMethodButton 
            label="REGULAR" 
            selected={shippingMethod === 'regular'} 
            onClick={() => setShippingMethod('regular')} 
          />
        </Box>
      </Grid>
      
      {/* Payment Method */}
      <Grid item xs={12} sx={{ mt: 1 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Select Payment Method
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <PaymentMethodButton 
            label="VISA" 
            selected={paymentMethod === 'visa'} 
            onClick={() => setPaymentMethod('visa')} 
          />
          <PaymentMethodButton 
            label="PAYPAL" 
            selected={paymentMethod === 'paypal'} 
            onClick={() => setPaymentMethod('paypal')} 
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default CheckoutForm