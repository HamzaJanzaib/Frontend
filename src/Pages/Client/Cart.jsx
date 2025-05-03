import React, { useState } from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper,
  Button
} from '@mui/material'
import CartItemRow from '../../Components/Client/CartItemRow'
import ShippingCalculator from '../../Components/Client/ShippingCalculator'
import CouponCode from '../../Components/Client/CouponCode'
import CartTotal from '../../Components/Client/CartTotal'

const Cart = () => {
  // Sample cart data - replace with your actual cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Floral Print Wrap Dress',
      category: 'WOMEN',
      price: 20.50,
      quantity: 2,
      image: '/book.png',
      color: 'Blue',
      size: '42',
      totalPrice: 41.00 // For display purposes
    },
    {
      id: 2,
      title: 'Floral Print Wrap Dress',
      category: 'WOMEN',
      price: 30.50,
      quantity: 1,
      image: '/book.png',
      color: 'Blue',
      size: '42',
      totalPrice: 30.50 // For display purposes
    }
  ])
  
  const [discount, setDiscount] = useState(4.00)
  
  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.totalPrice || (item.price * item.quantity))
  }, 0)
  
  const handleIncreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: item.quantity + 1} : item
    ))
  }
  
  const handleDecreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
    ))
  }
  
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }
  
  const handleApplyCoupon = (code) => {
    console.log('Applying coupon:', code)
    // Implement coupon logic here
    setDiscount(4.00) // Example discount
  }

  return (
    <Box sx={{ py: 4, minHeight: '100vh', display: 'flex', flexDirection: 'row' , width: '100%' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: 600 }}>
          Shopping Bag
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {cartItems.length} items in your bag.
        </Typography>
        
        <Grid container spacing={4}>
          {/* Cart Items */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: { xs: 4, md: 0 } }}>
              {/* Header */}
              <Grid container sx={{ pb: 2 }}>
                <Grid item xs={6} md={5}>
                  <Typography variant="subtitle2" fontWeight="600">
                    Product
                  </Typography>
                </Grid>
                <Grid item xs={2} md={2} sx={{ textAlign: 'center' }}>
                  <Typography variant="subtitle2" fontWeight="600">
                    Price
                  </Typography>
                </Grid>
                <Grid item xs={2} md={2} sx={{ textAlign: 'center' }}>
                  <Typography variant="subtitle2" fontWeight="600">
                    Quantity
                  </Typography>
                </Grid>
                <Grid item xs={2} md={3} sx={{ textAlign: 'right' }}>
                  <Typography variant="subtitle2" fontWeight="600">
                    Total Price
                  </Typography>
                </Grid>
              </Grid>
              
              {/* Cart Items */}
              {cartItems.map(item => (
                <CartItemRow 
                  key={item.id}
                  item={{...item, salePrice: item.totalPrice}}
                  onIncrease={handleIncreaseQuantity}
                  onDecrease={handleDecreaseQuantity}
                  onRemove={handleRemoveItem}
                />
              ))}
            </Paper>
          </Grid>
          
          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <ShippingCalculator />
            </Paper>
            
            <Paper sx={{ p: 3, mb: 3 }}>
              <CouponCode onApply={handleApplyCoupon} />
            </Paper>
            
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
                  Free
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
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                mb: 3,
                mt: 2,
                pt: 2,
                borderTop: '1px solid rgba(0,0,0,0.1)'
              }}>
                <Typography variant="h6" fontWeight="600">Cart Total</Typography>
                <Typography variant="h6" fontWeight="600">
                  ${(subtotal - discount).toFixed(2)}
                </Typography>
              </Box>
              
              <Button 
                variant="contained"
                fullWidth
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Cart
