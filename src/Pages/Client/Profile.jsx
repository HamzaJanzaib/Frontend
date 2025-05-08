import { Backdrop, Box, CircularProgress, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProfilesideBar from '../../Components/Client/ProfilesideBar';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [Data, SetData] = useState('');
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')} `,
  };

  const isSmallScreen = useMediaQuery('(max-width: 600px)'); // Adjust breakpoint as needed

  useEffect(() => {
    const Fetch = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/auth/profile`, { headers });
        SetData(response?.data?.user);
        console.log(Data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    Fetch();
  }, [Data]);

  return (
    <>
      {Data ? (
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row', // Stack on small screens
          }}
        >
          <Box
            sx={{
              width: isSmallScreen ? '100%' : '25dvw', // Full width on small screens
              height: isSmallScreen ? 'auto' : '100dvh', // Adjust height for small screens
              padding: '5%',
            }}
          >
            <ProfilesideBar data={Data} />
          </Box>
          <Box
            sx={{
              width: isSmallScreen ? '100%' : '75dvw', // Full width on small screens
              height: '100dvh',
              padding: '20px',
              overflowY: "auto",
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <Outlet />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            height: '100%',
          }}
        >
          <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      )}
    </>
  );
};

export default Profile;