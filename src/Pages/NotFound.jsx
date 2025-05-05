import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 3,
        backgroundColor: 'White', 
        color: '#0A3556',
      }}
    >
      <Typography variant="h1" color="#0A3556" sx={{ mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary" sx={{ backgroundColor: '#0A3556', color: 'white' }}>
        Go to Homepage
      </Button>
    </Box>
  )
}

export default NotFound