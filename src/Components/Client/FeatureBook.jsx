import React from 'react'
import { Box, Container, Typography, Button, Stack, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const FeatureBook = () => {
  // Featured book data
  const featuredBook = {
    title: 'Birds Gonna Be Happy',
    author: 'Timbur Hood',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.',
    price: 45.00,
    image: '/book.png', // Replace with your actual image path
    link: '/books'
  }

  return (
    <Box sx={{ 
      py: 10, 
      overflow: 'hidden'
    }}>
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }}
          spacing={6}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left side - Book Cover */}
          <Box 
            sx={{ 
              maxWidth: { xs: '100%', md: '40%' },
              position: 'relative',
              p: 2,
              borderRadius: 10
            }}
          >
            <Box
              component="img"
              src={featuredBook.image}
              alt={featuredBook.title}
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </Box>
          
          {/* Right side - Book Details */}
          <Box sx={{ 
            maxWidth: { xs: '100%', md: '40%' },
            textAlign: { xs: 'center', md: 'left' }
          }}>
            <Typography 
              variant="h4" 
              component="h2"
              sx={{ 
                color: '#0A3556',
                fontWeight: 700,
                mb: 2
              }}
            >
              Featured Book
            </Typography>
            
            <Divider 
              sx={{ 
                width: '80px', 
                borderColor: '#FF5757', 
                borderWidth: 2,
                mb: 3,
                mx: { xs: 'auto', md: 0 }
              }} 
            />
            
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: '#666',
                mb: 1,
                textTransform: 'uppercase',
                letterSpacing: 1
              }}
            >
              BY {featuredBook.author}
            </Typography>
            
            <Typography 
              variant="h3" 
              component="h3"
              sx={{ 
                color: '#0A3556',
                fontWeight: 600,
                mb: 2
              }}
            >
              {featuredBook.title}
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#666',
                mb: 3,
                lineHeight: 1.7
              }}
            >
              {featuredBook.description}
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#FF5757',
                fontWeight: 700,
                mb: 4
              }}
            >
              $ {featuredBook.price.toFixed(2)}
            </Typography>
            
            <Button
              component={Link}
              to={`/book-details/${featuredBook.id}`}
              variant="outlined"
              sx={{
                borderColor: '#0A3556',
                color: '#0A3556',
                borderRadius: 50,
                px: 3,
                py: 1,
                '&:hover': {
                  borderColor: '#0A3556',
                  bgcolor: 'rgba(75, 63, 138, 0.04)'
                }
              }}
            >
              VIEW MORE
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default FeatureBook
