import { Avatar, Box, Button, Divider, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProfilesideBar = ({ data }) => {
    const location = useLocation();
    const isMobile = useMediaQuery('(max-width:600px)');

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: isMobile ? '10px' : '20px',
                }}
            >
                <Avatar
                    alt="Travis Howard"
                    sx={{ width: isMobile ? 80 : 110, height: isMobile ? 80 : 110 }}
                    src={
                        data?.ProfileUrl ||
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_gIiCoj736HqKkFR0ixF9h-NTvqb2eMd9cw&s'
                    }
                />
                <Typography
                    variant={isMobile ? 'h6' : 'h5'}
                    sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center' }}
                >
                    {data?.fullname || <>Guest</>}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ mb: 3, fontWeight: 'light', color: 'gray', textAlign: 'center' }}
                >
                    {data?.email}
                </Typography>
                <Divider
                    orientation="vertical"
                    sx={{ color: 'gray', backgroundColor: 'gray', width: '100%' }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}
            >
                <Link to="/Profile">
                    <Button
                        sx={{
                            width: isMobile ? '90%' : '80%',
                            marginLeft: isMobile ? '5%' : '10%',
                            backgroundColor: isActive('/Profile') ? '#0A3556' : 'transparent',
                            color: isActive('/Profile') ? '#fff' : 'inherit',
                            ':hover': {
                                backgroundColor: '#0A3556',
                                color: '#fff',
                            },
                        }}
                    >
                        Favourite
                    </Button>
                </Link>
                <Link to="/profile/Order-Histry">
                    <Button
                        sx={{
                            width: isMobile ? '90%' : '80%',
                            marginLeft: isMobile ? '5%' : '10%',
                            backgroundColor: isActive('/Order-Histry') ? '#0A3556' : 'transparent',
                            color: isActive('/Order-Histry') ? '#fff' : 'inherit',
                            ':hover': {
                                backgroundColor: '#0A3556',
                                color: '#fff',
                            },
                        }}
                    >
                        Order-Histry
                    </Button>
                </Link>
                <Link to="/profile/setting">
                    <Button
                        sx={{
                            width: isMobile ? '90%' : '80%',
                            marginLeft: isMobile ? '5%' : '10%',
                            backgroundColor: isActive('/setting') ? '#0A3556' : 'transparent',
                            color: isActive('/setting') ? '#fff' : 'inherit',
                            ':hover': {
                                backgroundColor: '#0A3556',
                                color: '#fff',
                            },
                        }}
                    >
                        Setting
                    </Button>
                </Link>
            </Box>
            <Box
                sx={{
                    marginTop: isMobile ? '50px' : '100%',
                }}
            >
                <Link to="/Logout">
                    <Button
                        sx={{
                            width: isMobile ? '90%' : '80%',
                            marginLeft: isMobile ? '5%' : '10%',
                            backgroundColor: '#ba000d',
                            color: '#fff',
                        }}
                    >
                        Logout
                    </Button>
                </Link>
            </Box>
        </>
    );
};

export default ProfilesideBar;