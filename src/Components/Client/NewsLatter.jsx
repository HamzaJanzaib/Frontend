import React, { useState } from 'react'
import { Box, Container, Typography, TextField, Button, Stack } from '@mui/material'

const NewsLatter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    // Add your newsletter signup logic here
    setEmail('')
  }

  return (
    <Box 
      sx={{ 
        py: 6, 
        bgcolor: '#f8f9fa',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left side - Text content */}
          <Box sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: '#f05545',
                fontWeight: 500,
                mb: 1,
                textTransform: 'uppercase'
              }}
            >
              — eBook
            </Typography>
            
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: '#0A3556',
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.2
              }}
            >
              Access, Read, Practice & Engage with Digital Content (eBook)
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#6c757d',
                mb: 4,
                lineHeight: 1.7
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            
            <Box 
              component="form" 
              onSubmit={handleSubmit}
              sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 1,
                maxWidth: 450
              }}
            >
              <TextField
                placeholder="Enter Your Email Address"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  bgcolor: 'white',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1
                  }
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: '#f05545',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#d03b2d'
                  },
                  whiteSpace: 'nowrap'
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
          
          {/* Right side - Image */}
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', md: '45%' },
              height: { xs: 300, md: 350 }
            }}
          >
            <Box
              component="img"
              src="/NewsLatter.png" // Replace with your actual image path
              alt="Student with books"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center'
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default NewsLatter
