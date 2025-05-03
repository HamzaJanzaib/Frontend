import React, { useState } from 'react'
import { Box, Container, Typography, Button, Rating, Breadcrumbs, Link, Chip, Stack, Divider } from '@mui/material'
import { Link as RouterLink, useParams } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const BookDetails = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)

  // Mock book data - in a real app, you would fetch this based on the ID
  const book = {
    id: 1,
    title: 'Think',
    subtitle: 'and Grow Rich',
    author: 'Napoleon Hill',
    price: 10.00,
    discount: 60, // percentage
    rating: 4,
    reviewCount: 1,
    description: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt labore et dolore magna aliquyam.erat, sed diam voluptua. At vero accusam et justo duo dolores et ea rebum. Stet clitain vidunt ut labore eirmod tempor invidunt magna aliquyam.',
    image: '/book.png', // Replace with your actual image path
    categories: ['Sports', 'Strategy']
  }

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 4 }}
        >
          <Link component={RouterLink} to="/" color="inherit">
            Home
          </Link>
          <Link component={RouterLink} to="/books" color="inherit">
            Books
          </Link>
          <Typography color="text.primary">{book.title}</Typography>
        </Breadcrumbs>

        {/* Main content */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          mb: 6
        }}>
          {/* Left side - Book image */}
          <Box sx={{ 
            width: { xs: '100%', md: '40%' },
            position: 'relative'
          }}>
            {book.discount > 0 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 50,
                  left: 20,
                  bgcolor: '#0A3556',
                  color: 'white',
                  fontWeight: 'bold',
                  py: 0.5,
                  px: 1,
                  borderRadius: '4px',
                  zIndex: 1
                }}
              >
                {book.discount}%
              </Box>
            )}
            <Box
              sx={{
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
                height: '100%',
                minHeight: '400px'
              }}
            >
              <Box
                component="img"
                src={book.image}
                alt={book.title}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            </Box>
          </Box>

          {/* Right side - Book details */}
          <Box sx={{ 
            width: { xs: '100%', md: '60%' },
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Typography 
              variant="h4" 
              component="h1"
              sx={{ 
                fontWeight: 700,
                mb: 1,
                color: '#0A3556'
              }}
            >
              {book.title}
            </Typography>

            {/* Ratings */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating 
                value={book.rating} 
                readOnly 
                precision={0.5}
                sx={{ 
                  color: '#FFA41C',
                  mr: 1
                }}
              />
              <Typography variant="body2" color="text.secondary">
                {book.reviewCount} Review{book.reviewCount !== 1 ? 's' : ''}
              </Typography>
            </Box>

            {/* Description */}
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#666',
                mb: 3,
                lineHeight: 1.7
              }}
            >
              {book.description}
            </Typography>

            {/* Price */}
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#0A3556c',
                fontWeight: 600,
                mb: 3
              }}
            >
              ${book.price.toFixed(2)}
            </Typography>

            {/* Add to cart section */}
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}>
              {/* Quantity selector */}
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <Button 
                  onClick={() => handleQuantityChange(-1)}
                  sx={{ 
                    minWidth: '40px',
                    bgcolor: '#f5f5f5',
                    borderRadius: 0,
                    '&:hover': {
                      bgcolor: '#e0e0e0'
                    }
                  }}
                >
                  -
                </Button>
                <Box sx={{ 
                  px: 2,
                  py: 1,
                  minWidth: '40px',
                  textAlign: 'center'
                }}>
                  {quantity}
                </Box>
                <Button 
                  onClick={() => handleQuantityChange(1)}
                  sx={{ 
                    minWidth: '40px',
                    bgcolor: '#f5f5f5',
                    borderRadius: 0,
                    '&:hover': {
                      bgcolor: '#e0e0e0'
                    }
                  }}
                >
                  +
                </Button>
              </Box>

              {/* Add to cart button */}
              <Button
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                sx={{
                  bgcolor: '#0A3556',
                  '&:hover': {
                    bgcolor: '#0A3556'
                  },
                  px: 3,
                  py: 1,
                  borderRadius: '4px',
                  textTransform: 'none',
                  fontWeight: 600
                }}
              >
                Add To Cart
              </Button>
            </Box>

            {/* Categories */}
            <Box sx={{ mt: 2 }}>
              <Typography 
                variant="body2" 
                component="span"
                sx={{ 
                  color: '#666',
                  mr: 1
                }}
              >
                Categories:
              </Typography>
              {book.categories.map((category, index) => (
                <React.Fragment key={index}>
                  <Link 
                    component={RouterLink} 
                    to={`/category/${category.toLowerCase()}`}
                    sx={{ 
                      color: '#0A3556',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline'
                      },
                      mr: 1
                    }}
                  >
                    {category}
                  </Link>
                  {index < book.categories.length - 1 && ', '}
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Additional sections like reviews, related books, etc. can be added here */}
      </Container>
    </Box>
  )
}

export default BookDetails