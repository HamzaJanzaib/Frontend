import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import CartItem from '../../Components/Client/CartItem'; // Import CartItem component
import axios from 'axios';

const Cart = () => {
  useEffect(() => {
    const fetchCart = async () => {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem('token')} `,
      };
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/user/GetCart`,
          { headers }
        );
        setCartItems(response?.data?.data);
        console.log(response?.data?.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchCart();
  }, []);

  const [cartItems, setCartItems] = useState([]);
  const [discount] = useState(10);
  const [subtotal] = useState(4495);
  console.log(discount)

  const handleIncreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Box
      sx={{
        py: 4,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        bgcolor: '#fff', // Set background color to white
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 1, fontWeight: 600, textAlign: { xs: 'center', md: 'left' } }}
        >
          Shopping Bag
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, textAlign: { xs: 'center', md: 'left' } }}
        >
          {cartItems.length} items in your bag.
        </Typography>

        <Grid container spacing={4}>
          {/* Cart Items */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: { xs: 4, md: 0 }, bgcolor: '#fff' }}>
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
              {cartItems.map((item) => (
                < CartItem
                  key={item._id}
                  data={item}
                  onIncrease={() => handleIncreaseQuantity(item._id)}
                  onDecrease={() => handleDecreaseQuantity(item._id)}
                  onRemove={() => handleRemoveItem(item._id)}
                />
              ))}
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, mb: 3, bgcolor: '#fff' }}>
              <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>
                Cart Totals
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 1,
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Typography variant="body1">Subtotal</Typography>
                <Typography variant="body1" fontWeight="500">
                  Rs {subtotal.toFixed(2)}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 1,
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Typography variant="body1">Delivery</Typography>
                <Typography variant="body1" fontWeight="500">
                  Free
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Typography variant="body1" sx={{ mb: 1 }}>
                Delivers to <strong>SINDH, PAKISTAN</strong>
              </Typography>

              <RadioGroup defaultValue="free">
                <FormControlLabel
                  value="free"
                  control={<Radio />}
                  label="Free shipping"
                />
                <FormControlLabel
                  value="flat"
                  control={<Radio />}
                  label="Flat rate Rs 300"
                />
              </RadioGroup>

              <Divider sx={{ my: 2 }} />

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 3,
                  mt: 2,
                  pt: 2,
                  borderTop: '1px solid rgba(0,0,0,0.1)',
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Typography variant="h6" fontWeight="600">
                  Total
                </Typography>
                <Typography variant="h6" fontWeight="600">
                  Rs {subtotal.toFixed(2)}
                </Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#000',
                  color: '#fff',
                  py: 1.5,
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#333',
                  },
                }}
              >
                Proceed to Checkout
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cart;
