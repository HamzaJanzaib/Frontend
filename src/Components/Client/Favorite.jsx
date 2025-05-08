import { Backdrop, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const Favorite = () => {
  const [Data, setData] = useState()
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')} `,
  };
  useEffect(() => {
    const getFavorite = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/v1/user/GetFavorite`,
        { headers }
      );
      setData(response.data.data);
    };
    getFavorite();
  }, []);

  return (
    <>
      {
        Data ? <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
          {Data.map((book) => (
            <Card key={book._id} Books={book} />
          ))}
        </Box> : (
          <Box
            sx={{
              height: '100dvh',
            }}
          >
            <Backdrop
              sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
              open
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </Box>
        )
      }
    </>
  )
}

export default Favorite