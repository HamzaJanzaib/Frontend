import React, { useState } from 'react'
import { Box, Container, InputBase, Button, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CartDrawer from './CartDrawer';

const CenterBar = () => {
    const [cartOpen, setCartOpen] = useState(false);

    const handleCartOpen = () => {
        setCartOpen(true);
    };

    const handleCartClose = () => {
        setCartOpen(false);
    };

    return (
        <Box sx={{
            width: '100%',
            py: 2,
            borderBottom: '1px solid #e0e0e0'
        }}>
            <Container maxWidth="lg">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box sx={{
                        maxWidth: 150,
                        objectFit: 'contain',
                        overflow: 'hidden'
                    }}>
                        <img src="/logo.png" alt="" style={{ width: '100%' }} />
                    </Box>
                    {/* Search Bar */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '40%',
                            bgcolor: '#f5f5f5',
                            borderRadius: 50,
                            px: 2, py: 0.5
                        }}
                    >
                        <InputBase placeholder="Search Books"
                            sx={{
                                ml: 1,
                                flex: 1
                            }} />
                        <Button sx={{
                            minWidth: 'auto',
                            p: 1
                        }}>
                            <SearchIcon />
                        </Button>
                    </Box>
                    {/* Account, Cart, Wishlist */}
                    <Stack direction="row" spacing={3}>
                        <Button
                            startIcon={<PersonOutlineIcon />} 
                            sx={{ color: '#0A3556' }}
                        >
                            ACCOUNT
                        </Button>
                        <Button
                            startIcon={<ShoppingBagOutlinedIcon />} 
                            sx={{ color: '#0A3556' }}
                            onClick={handleCartOpen}
                        >
                            CART:(0$)
                        </Button>
                        <Button
                            startIcon={<FavoriteBorderOutlinedIcon />} 
                            sx={{ color: '#0A3556' }}
                        >
                            WISHLIST
                        </Button>
                    </Stack>
                </Stack>
            </Container>
            
            {/* Cart Drawer */}
            <CartDrawer open={cartOpen} onClose={handleCartClose} />
        </Box>
    )
}

export default CenterBar
