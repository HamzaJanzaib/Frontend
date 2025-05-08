import React, { useState } from 'react'
import { Box, Container, InputBase, Button, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import InputIcon from '@mui/icons-material/Input';
import CartDrawer from './CartDrawer';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Logout from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';

const CenterBar = () => {
    const navigate = useNavigate();
    const [cartOpen, setCartOpen] = useState(false);

    const IsLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const IsAdmin = useSelector((state) => state.auth.role);

    const handleCartOpen = () => {
        setCartOpen(true);
    };

    const handleCartClose = () => {
        setCartOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Box sx={{
            width: '100%',
            py: 2,
            borderBottom: '1px solid #e0e0e0'
        }}>
            <Container maxWidth="lg">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Link to="/" >
                        <Box sx={{
                            maxWidth: 150,
                            objectFit: 'contain',
                            overflow: 'hidden'
                        }}>
                            <img src="/logo.png" alt="" style={{ width: '100%' }} />
                        </Box>
                    </Link>
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
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <Typography
                                    onClick={handleClick}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    sx={{ minWidth: 100 }}>Account</Typography>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <Link to="/Profile">
                                    <MenuItem onClick={handleClose}>
                                        <Avatar /> Profile
                                    </MenuItem>
                                </Link>
                                <Link to="/logout">
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" sx={{ color: "#0A3556" }} />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Link>
                                {IsAdmin === "admin"
                                    ? [
                                        <Divider key="divider" />,
                                        <Link to="/dashboard" key="dashboard">
                                            <MenuItem onClick={handleClose}>
                                                <ListItemIcon>
                                                    <DashboardIcon fontSize="small" sx={{ color: "#0A3556" }} />
                                                </ListItemIcon>
                                                Dashboard
                                            </MenuItem>
                                        </Link>,
                                    ]
                                    : null}
                            </Menu>
                        </Button>
                        {
                            IsLoggedIn ? <>

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
                                </Button> </>
                                :
                                <>
                                    <Button
                                        startIcon={<AppRegistrationIcon />}
                                        sx={{ color: '#0A3556' }}
                                        onClick={() => handleNavigate("/Register")}
                                    >
                                        Register
                                    </Button>
                                    <Button
                                        startIcon={<InputIcon />}
                                        sx={{ color: '#0A3556' }}
                                        onClick={() => handleNavigate("/login")}
                                    >
                                        Login
                                    </Button>

                                </>
                        }
                    </Stack>
                </Stack>
            </Container>

            {/* Cart Drawer */}
            <CartDrawer open={cartOpen} onClose={handleCartClose} />
        </Box>
    )
}

export default CenterBar
