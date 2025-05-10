import React from 'react'
import { Box, Typography, Paper, IconButton, Tooltip, Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import { useDispatch } from 'react-redux'
import { CartActions } from '../../Store/Cart'

const Card = ({ Books }) => {
  const dispatch = useDispatch()
  // Use provided book or default
  const { _id, Title, price, images, Language, discount  } = Books 

  // Handle add to cart
  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(CartActions.addToCart({
      _id,
      title: Title,
      price: discount > 0 ? discount : price,
      image: images[0],
      quantity: 1
    }))
  }

  // Handle add to favorites
  const handleAddToFavorites = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Added to favorites:', _id)
    // Add your favorites logic here
  }

  return (
    <Box
      component={Link}
      to={`/book-details/${_id}`}
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
            src={images[0]}
            alt={Title}
            sx={{
              height: '100%',
              objectFit: 'contain',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />

          {/* Discount Badge */}
          {discount > 0 && (
            <Badge
              badgeContent={`-${Math.round(((price - discount) / price) * 100)}%`}
              color="error"
              sx={{
                position: 'absolute',
                top: 20,
                left: 10,
                '& .MuiBadge-badge': {
                  fontSize: '0.8rem',
                  height: 'auto',
                  padding: '5px'
                }
              }}
            >
              <LocalOfferIcon color="error" />
            </Badge>
          )}

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
          {Title}
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
        </Typography>

        {/* Language */}
        <Typography
          variant="body2"
          sx={{
            color: '#6c757d',
            textAlign: 'center',
            mb: 1
          }}
        >
          Language: {Language}
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
          ${discount.toFixed(2)}
          {discount > 0 && (
            <Typography
              variant="subtitle2"
              component="span"
              sx={{
                color: '#6c757d',
                textDecoration: 'line-through',
                ml: 1
              }}
            >
              ${price.toFixed(2)}
            </Typography>
          )}
        </Typography>
      </Paper>
    </Box>
  )
}

export default Card
