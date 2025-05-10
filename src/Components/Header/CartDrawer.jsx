import React, { useState } from 'react'
import { 
  Drawer, 
  Box, 
  Typography, 
  IconButton, 
  Button, 
  Divider,
  Stack,
  LinearProgress,
  Grid,
  Checkbox,
  FormControlLabel
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Link } from 'react-router-dom'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'

const CartDrawer = ({ open, onClose }) => {
  // Sample cart data - replace with your actual cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Spectator sport mascara',
      price: 59.00,
      quantity: 1,
      image: '/book.png'
    }
  ])
  
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const freeShippingThreshold = 200
  const amountToFreeShipping = freeShippingThreshold - totalAmount
  const progress = (totalAmount / freeShippingThreshold) * 100
  
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

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { 
          width: { xs: '100%', sm: 400 },
          bgcolor: '#FAFAFA'
        }
      }}
    >
      <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight="600">
            Your cart <Box component="span" sx={{ 
              bgcolor: '#000', 
              color: '#fff', 
              px: 1, 
              py: 0.5, 
              borderRadius: '50%', 
              ml: 1, 
              fontSize: 14,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 24,
              height: 24
            }}>{cartItems.length}</Box>
          </Typography>
          <IconButton onClick={onClose} sx={{ p: 0 }}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        {/* Free shipping progress */}
        {amountToFreeShipping > 0 && (
          <Box sx={{ mb: 3, bgcolor: '#fff', p: 2, borderRadius: 1 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Spend ${amountToFreeShipping.toFixed(2)} more to reach free shipping!
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ 
                height: 4, 
                borderRadius: 2,
                bgcolor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  bgcolor: '#000'
                }
              }} 
            />
          </Box>
        )}
        
        {/* Cart items */}
        <Box sx={{ flex: 1, overflowY: 'auto', mb: 3 }}>
          {cartItems.map(item => (
            <Box key={item.id} sx={{ mb: 3, bgcolor: '#fff', p: 2, borderRadius: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="subtitle1" fontWeight="600">
                  {item.title}
                </Typography>
                <IconButton size="small" onClick={() => handleRemoveItem(item.id)} sx={{ p: 0 }}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2" fontWeight="500">
                  ${item.price.toFixed(2)}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton 
                    size="small" 
                    onClick={() => handleDecreaseQuantity(item.id)}
                    sx={{ 
                      border: '1px solid #e0e0e0',
                      borderRadius: '50%',
                      width: 28,
                      height: 28,
                      p: 0
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <Typography sx={{ mx: 2, fontWeight: 500 }}>{item.quantity}</Typography>
                  <IconButton 
                    size="small" 
                    onClick={() => handleIncreaseQuantity(item.id)}
                    sx={{ 
                      border: '1px solid #e0e0e0',
                      borderRadius: '50%',
                      width: 28,
                      height: 28,
                      p: 0
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          ))}
          
        </Box>
        
        {/* Total and checkout */}
        <Box sx={{ mt: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6" fontWeight="600">Estimated total</Typography>
            <Typography variant="h6" fontWeight="600">${totalAmount.toFixed(2)} USD</Typography>
          </Box>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Taxes, Discounts and <Link to="/shipping" style={{ color: '#000', textDecoration: 'underline' }}>Shipping</Link> calculated at checkout.
          </Typography>
          
          <Stack direction="row" spacing={2}>
            <Button 
              variant="outlined" 
              fullWidth
              component={Link}
              to="/cart"
              onClick={onClose}
              sx={{ 
                borderColor: '#e0e0e0', 
                color: '#000',
                borderRadius: 50,
                py: 1.5,
                textTransform: 'none',
                fontWeight: 600
              }}
            >
              View Cart
            </Button>
            <Button 
              variant="contained" 
              fullWidth
              component={Link}
              to="/checkout"
              onClick={onClose}
              sx={{ 
                bgcolor: '#000', 
                color: '#fff',
                borderRadius: 50,
                py: 1.5,
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#333'
                }
              }}
            >
              Check Out
            </Button>
          </Stack>
        </Box>
      </Box>
    </Drawer>
  )
}

export default CartDrawer
