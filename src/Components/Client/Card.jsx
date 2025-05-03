import React from 'react'
import { Box, Typography, Paper, IconButton, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

const Card = ({ book }) => {
  // Default values if book prop is not provided
  const defaultBook = {
    id: 1,
    title: 'Great Travel At Desert',
    author: 'Sanchit Howdy',
    price: 38.00,
    image: 'https://example.com/book-cover.jpg',
    link: '/books/1'
  }

  // Use provided book or default
  const { id, title, author, price, image, link } = book || defaultBook

  // Handle add to cart
  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Added to cart:', id)
    // Add your cart logic here
  }

  // Handle add to favorites
  const handleAddToFavorites = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Added to favorites:', id)
    // Add your favorites logic here
  }

  return (
    <Box 
      component={Link} 
      to={`/book-details/${id}`}
      sx={{ 
        textDecoration: 'none',
        display: 'block',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        },
        position: 'relative'
      }}
    >
      <Paper 
        elevation={2}
        sx={{ 
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: 'white'
        }}
      >
        {/* Book Cover */}
        <Box 
          sx={{ 
            width: '100%',
            height: 280,
            mb: 2,
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              height: '100%',
              objectFit: 'contain',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
          
          {/* Hover overlay with icons */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 1
              }
            }}
          >
            <Box>
              <Tooltip title="Add to Cart">
                <IconButton
                  onClick={handleAddToCart}
                  sx={{
                    bgcolor: 'white',
                    color: '#f05545',
                    m: 0.5,
                    '&:hover': {
                      bgcolor: '#f05545',
                      color: 'white'
                    }
                  }}
                >
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </Tooltip>
              
              <Tooltip title="Add to Favorites">
                <IconButton
                  onClick={handleAddToFavorites}
                  sx={{
                    bgcolor: 'white',
                    color: '#f05545',
                    m: 0.5,
                    '&:hover': {
                      bgcolor: '#f05545',
                      color: 'white'
                    }
                  }}
                >
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
        
        {/* Book Title */}
        <Typography 
          variant="h6" 
          component="h3"
          sx={{ 
            color: '#0A3556',
            fontWeight: 600,
            textAlign: 'center',
            mb: 0.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {title}
        </Typography>
        
        {/* Author */}
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#6c757d',
            textAlign: 'center',
            mb: 1,
            fontStyle: 'italic'
          }}
        >
          by {author}
        </Typography>
        
        {/* Price */}
        <Typography 
          variant="subtitle1" 
          sx={{ 
            color: '#f05545',
            fontWeight: 700,
            textAlign: 'center'
          }}
        >
          ${price.toFixed(2)}
        </Typography>
      </Paper>
    </Box>
  )
}

export default Card
