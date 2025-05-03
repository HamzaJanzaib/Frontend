import React from 'react'
import { Box, Container, Grid, Typography, Link, Stack, Divider } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  // Company links
  const companyLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about-us' },
    { name: 'BOOKS', path: '/books' },
    { name: 'EBOOKS', path: '/ebooks' },
    { name: 'NEW RELEASE', path: '/new-release' },
    { name: 'CONTACT US', path: '/contact-us' },
    { name: 'BLOG', path: '/blog' }
  ]
  
  // Latest news
  const latestNews = [
    {
      title: 'Nostrud exercitation',
      description: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/Footer1.png',
      date: '12 Jul 2023',
      path: '/blog/nostrud-exercitation-1'
    },
    {
      title: 'Nostrud exercitation',
      description: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/Footer2.png',
      date: '10 Jul 2023',
      path: '/blog/nostrud-exercitation-2'
    }
  ]
  
  // Social media links
  const socialLinks = [
    { icon: <FacebookIcon />, url: 'https://facebook.com' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com' },
    { icon: <TwitterIcon />, url: 'https://twitter.com' },
    { icon: <YouTubeIcon />, url: 'https://youtube.com' }
  ]

  return (
    <Box sx={{ 
      bgcolor: '#FFFFFF', 
      pt: 8, 
      pb: 4,
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Logo and description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Box 
                component={RouterLink} 
                to="/"
                sx={{ 
                  display: 'inline-block',
                  textDecoration: 'none'
                }}
              >
                <Box 
                  component="img"
                  src="/logo.png"
                  alt="Book Store Logo"
                  sx={{ height: 70 }}
                />
              </Box>
            </Box>
            
            <Typography 
              variant="body2" 
              color="#0A3556"
              sx={{ mb: 3, maxWidth: 300 }}
            >
              Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            
            {/* Social media icons */}
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              {socialLinks.map((social, index) => (
                <Link 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: '#f8f8f8',
                    color: '#0A3556',
                    transition: 'all 0.2s',
                    '&:hover': {
                      bgcolor: '#f05545',
                      color: 'white'
                    }
                  }}
                >
                  {social.icon}
                </Link>
              ))}
            </Stack>
          </Grid>
          
          {/* Company links */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#0A3556',
                fontWeight: 600,
                mb: 3
              }}
            >
              COMPANY
            </Typography>
            
            <Stack spacing={1.5}>
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: 'text.primary',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: '#0A3556'
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>
          
          {/* Latest news */}
          <Grid item xs={12} md={5}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#0A3556',
                fontWeight: 600,
                mb: 3
              }}
            >
              LATEST NEWS
            </Typography>
            
            <Stack spacing={3}>
              {latestNews.map((news, index) => (
                <Box 
                  key={index}
                  sx={{
                    display: 'flex',
                    gap: 2
                  }}
                >
                  <Box
                    component="img"
                    src={news.image}
                    alt={news.title}
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: 'cover',
                      borderRadius: 1
                    }}
                  />
                  
                  <Box>
                    <Link
                      component={RouterLink}
                      to={news.path}
                      sx={{
                        color: '#0A3556',
                        textDecoration: 'none',
                        fontWeight: 600,
                        display: 'block',
                        mb: 0.5,
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {news.title}
                    </Link>
                    
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {news.description}
                    </Typography>
                    
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: '#0A3556',
                        display: 'block'
                      }}
                    >
                      {news.date}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
        
        {/* Footer bottom */}
        <Box 
          sx={{ 
            mt: 6, 
            pt: 3, 
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: 2,
            borderTop: '1px solid #f0f0f0'
          }}
        >
          <Typography 
            variant="body2" 
            color="text.secondary"
          >
            © {currentYear} Arihart. All Rights Reserved.
          </Typography>
          
          <Box>
            <Link 
              component={RouterLink} 
              to="/privacy"
              sx={{
                color: '#0A3556',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Privacy
            </Link>
            <Typography 
              component="span" 
              sx={{ 
                mx: 1,
                color: '#0A3556'
              }}
            >
              |
            </Typography>
            <Link 
              component={RouterLink} 
              to="/terms"
              sx={{
                color: '#0A3556',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer 
