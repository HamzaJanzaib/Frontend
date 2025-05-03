import React, { useState } from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  TextField,
  Button,
} from '@mui/material'
import { styled } from '@mui/material/styles'

// Custom styled TextField
const StyledTextField = styled(TextField)(() => ({
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

const Checkout = () => {
  // Sample cart items
  const cartItems = [
    {
      id: 1,
      title: 'Carlisle Jeans',
      price: 3590,
      quantity: 1,
      image: '/book.png',
      color: 'Beige',
      size: '27'
    },
    {
      id: 2,
      title: 'Eligio Jacket in Wool',
      price: 3590,
      quantity: 1,
      image: '/book.png',
      color: 'Coffee',
      size: '40'
    }
  ];

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 20;
  const tax = 0;
  const total = subtotal + shipping + tax;

  // State for shipping and payment methods
  const [shippingMethod, setShippingMethod] = useState('regular');
  const [paymentMethod, setPaymentMethod] = useState('visa');

  return (
    <Box sx={{ 
      py: 6, 
      bgcolor: 'white', 
      color: 'black',
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" sx={{ mb: 6, textAlign: 'center' }}>
          Checkout
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Left side - Customer Information */}
          <Box sx={{ flex: 1 }}>
            {/* First Name & Last Name */}
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  First Name
                </Typography>
                <StyledTextField 
                  fullWidth 
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Last Name
                </Typography>
                <StyledTextField 
                  fullWidth 
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Box>
            
            {/* Address */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Address
              </Typography>
              <StyledTextField 
                fullWidth 
                variant="outlined"
                size="small"
              />
            </Box>
            
            {/* City & Country */}
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  City
                </Typography>
                <StyledTextField 
                  fullWidth 
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Country
                </Typography>
                <StyledTextField 
                  fullWidth 
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Box>
            
            {/* Postal Code & Phone */}
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Postal Code
                </Typography>
                <StyledTextField 
                  fullWidth 
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Phone Number
                </Typography>
                <StyledTextField 
                  fullWidth 
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Box>
            
            {/* Shipping Method */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Select Shipping Method
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                  variant={shippingMethod === 'same-day' ? 'contained' : 'outlined'}
                  onClick={() => setShippingMethod('same-day')}
                  sx={{ 
                    borderColor: 'black', 
                    color: shippingMethod === 'same-day' ? 'white' : 'black',
                    bgcolor: shippingMethod === 'same-day' ? 'black' : 'transparent',
                    '&:hover': {
                      bgcolor: shippingMethod === 'same-day' ? 'black' : 'rgba(0,0,0,0.04)',
                      borderColor: 'black'
                    }
                  }}
                >
                  SAME DAY
                </Button>
                <Button 
                  variant={shippingMethod === 'next-day' ? 'contained' : 'outlined'}
                  onClick={() => setShippingMethod('next-day')}
                  sx={{ 
                    borderColor: 'black', 
                    color: shippingMethod === 'next-day' ? 'white' : 'black',
                    bgcolor: shippingMethod === 'next-day' ? 'black' : 'transparent',
                    '&:hover': {
                      bgcolor: shippingMethod === 'next-day' ? 'black' : 'rgba(0,0,0,0.04)',
                      borderColor: 'black'
                    }
                  }}
                >
                  NEXT DAY
                </Button>
                <Button 
                  variant={shippingMethod === 'regular' ? 'contained' : 'outlined'}
                  onClick={() => setShippingMethod('regular')}
                  sx={{ 
                    borderColor: 'black', 
                    color: shippingMethod === 'regular' ? 'white' : 'black',
                    bgcolor: shippingMethod === 'regular' ? 'black' : 'transparent',
                    '&:hover': {
                      bgcolor: shippingMethod === 'regular' ? 'black' : 'rgba(0,0,0,0.04)',
                      borderColor: 'black'
                    }
                  }}
                >
                  REGULAR
                </Button>
              </Box>
            </Box>
            
            {/* Payment Method */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Select Payment Method
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                  variant={paymentMethod === 'visa' ? 'contained' : 'outlined'}
                  onClick={() => setPaymentMethod('visa')}
                  sx={{ 
                    borderColor: 'black', 
                    color: paymentMethod === 'visa' ? 'white' : 'black',
                    bgcolor: paymentMethod === 'visa' ? 'black' : 'transparent',
                    '&:hover': {
                      bgcolor: paymentMethod === 'visa' ? 'black' : 'rgba(0,0,0,0.04)',
                      borderColor: 'black'
                    }
                  }}
                >
                  VISA
                </Button>
                <Button 
                  variant={paymentMethod === 'paypal' ? 'contained' : 'outlined'}
                  onClick={() => setPaymentMethod('paypal')}
                  sx={{ 
                    borderColor: 'black', 
                    color: paymentMethod === 'paypal' ? 'white' : 'black',
                    bgcolor: paymentMethod === 'paypal' ? 'black' : 'transparent',
                    '&:hover': {
                      bgcolor: paymentMethod === 'paypal' ? 'black' : 'rgba(0,0,0,0.04)',
                      borderColor: 'black'
                    }
                  }}
                >
                  PAYPAL
                </Button>
              </Box>
            </Box>
          </Box>
          
          {/* Right side - Order Summary */}
          <Box sx={{ flex: 1 }}>
            {/* Cart Items */}
            {cartItems.map((item) => (
              <Box key={item.id} sx={{ display: 'flex', mb: 3 }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 80,
                    height: 100,
                    objectFit: 'cover',
                    mr: 2
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="subtitle1">{item.title}</Typography>
                    <Typography variant="subtitle1">x{item.quantity}</Typography>
                  </Box>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>${(item.price / 100).toFixed(2)}</Typography>
                  
                  <Box sx={{ display: 'flex', gap: 4 }}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">Color</Typography>
                      <Typography variant="body2">{item.color}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">Size</Typography>
                      <Typography variant="body2">{item.size}</Typography>
                    </Box>
                  </Box>
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
            <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
              *By continuing, you agree to<br />
              the terms and conditions
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Checkout
