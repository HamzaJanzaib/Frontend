import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const FAQAlert = () => (
  <Box sx={{
    py: { xs: 8, md: 10 },
    bgcolor: 'white',
    textAlign: 'center',
  }}>
    <Container maxWidth="sm">
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 700,
          color: '#183B56',
          mb: 2,
          letterSpacing: 0.5,
        }}
      >
        Still not sure?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#42526E',
          mb: 4,
          fontSize: { xs: '1rem', md: '1.05rem' },
          lineHeight: 1.7,
          maxWidth: 520,
          mx: 'auto',
        }}
      >
        Jump start your book reading by quickly check through the popular book categories. 1000+ books are published by different authors everyday. Buy your favourite books on TreeBooks Today.
      </Typography>
      <Button
        variant="outlined"
        sx={{
          borderRadius: 2,
          px: 5,
          py: 1.2,
          fontWeight: 500,
          fontSize: '1rem',
          borderColor: '#183B56',
          color: '#183B56',
          '&:hover': {
            borderColor: '#183B56',
            bgcolor: '#f5f8fa',
          },
        }}
      >
        Read FAQ
      </Button>
    </Container>
  </Box>
);

export default FAQAlert;
