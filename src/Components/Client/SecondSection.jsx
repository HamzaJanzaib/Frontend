import React from 'react'
import { Box, Container, Typography, Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const CategoryCard = ({ title, image, link }) => {
  return (
    <Box
      component={Link}
      to={link}
      sx={{
        position: 'relative',
        height: 220,
        borderRadius: 2,
        overflow: 'hidden',
        display: 'block',
        textDecoration: 'none',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 20px rgba(0,0,0,0.15)'
        }
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.7)'
        }}
      />
      <Typography
        variant="h6"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          color: 'white',
          padding: 2,
          fontWeight: 'bold',
          textAlign: 'center',
          textShadow: '1px 1px 3px rgba(0,0,0,0.6)'
        }}
      >
        {title}
      </Typography>
    </Box>
  )
}

const SecondSection = () => {
  const categories = [

    {
      title: 'Finance Books',
      image: 'https://i.pinimg.com/736x/8c/b6/d1/8cb6d169d6084542dad36564764bac9f.jpg',
      link: '/categories/finance'
    },

    {
      title: 'Explore Top Categories',
      isCenter: true,
      link: '/categories'
    },
    {
      title: 'Management Books',
      image: 'https://i.pinimg.com/736x/6e/7a/18/6e7a1825a998bcd8470f554eeb20aae1.jpg',
      link: '/categories/management'
    },
    {
      title: 'Commerce Books',
      image: 'https://i.pinimg.com/736x/6e/42/fb/6e42fb037d74fc05d5e0aae5ee79f078.jpg',
      link: '/categories/commerce'
    },
    {
      title: 'Engineering Books',
      image: 'https://i.pinimg.com/736x/01/4b/ee/014beefb7e389234e400edeebfae4165.jpg',
      link: '/categories/engineering'
    },
    {
      title: 'Higher Education',
      image: 'https://i.pinimg.com/736x/53/08/ff/5308ffac17f0f91a4601a0a9638a7d52.jpg',
      link: '/categories/higher-education'
    },

  ]

  return (
    <Box sx={{ py: 8, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {category.isCenter ? (
                <Box
                  sx={{
                    height: 220,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    padding: 3
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      color: '#0A3556',
                      fontWeight: 700,
                      textAlign: 'center',
                      fontSize: { xs: '1rem', md: '1.9rem' },
                      mb: 3
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Button
                    component={Link}
                    to={category.link}
                    variant="contained"
                    sx={{
                      bgcolor: '#f05545',
                      color: 'white',
                      borderRadius: 50,
                      px: 4,
                      py: 1,
                      '&:hover': {
                        bgcolor: '#d03b2d'
                      }
                    }}
                  >
                    View All
                  </Button>
                </Box>
              ) : (
                <CategoryCard
                  title={category.title}
                  image={category.image}
                  link={category.link}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default SecondSection