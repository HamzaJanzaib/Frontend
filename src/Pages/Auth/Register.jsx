import React, { useState } from 'react'
import { 
  Box, 
  Container, 
  TextField, 
  Button, 
  Typography, 
  InputAdornment, 
  IconButton, 
  Paper, 
  Stack 
} from '@mui/material'
// import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt with:', formData)
    // Add your authentication logic here
  }

  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'transparent'
    }}>
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }}
          sx={{ minHeight: '80vh' }}
        >
          {/* Left side - Login Form */}
          <Box 
            component={Paper} 
            elevation={6} 
            sx={{ 
              p: 4,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Typography component="h1" variant="h4" sx={{ mb: 6, fontWeight: 'bold', color: '#333' , maxWidth: '100px' }}>
                <img src="/logo.png" alt="Logo" />
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <Box component="span" sx={{ fontSize: 18, color: '#aaa' }}>
                            👤
                          </Box>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <Box component="span" sx={{ fontSize: 18, color: '#aaa' }}>
                            👤
                          </Box>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ 
                    mt: 5, 
                    mb: 2, 
                    py: 1.5,
                    backgroundColor: '#2E3B55',
                    '&:hover': {
                      backgroundColor: '#1c2538',
                    }
                  }}
                >
                  REGISTER
                </Button>
              </Box>
            </Box>
          </Box>
          
          {/* Right side - Image */}
          <Box 
            sx={{
              flex: 1,
              backgroundImage: 'url(https://source.unsplash.com/random?laptop,workspace)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: { xs: 'none', md: 'block' }
            }}
          />
        </Stack>
      </Container>
    </Box>
  )
}

export default Login
