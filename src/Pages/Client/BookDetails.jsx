import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, Button, Breadcrumbs, Link, CircularProgress } from '@mui/material'
import { Link as RouterLink, useParams } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import axios from 'axios'

const BookDetails = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/api/v1/Books/GetSingleBook/${id}`);
        if (response.data && response.data.data) {
          setBook(response.data.data);
        } else {
          setError('Book data not found');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book:', error);
        setError('Failed to fetch book. Please try again later.');
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }
  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Added to cart:', book._id)
  }


  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Typography color="error">{error}</Typography>
        </Container>
      </Box>
    );
  }

  if (!book) {
    return (
      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Typography>Book not found</Typography>
        </Container>
      </Box>
    );
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
          <Typography color="text.primary">{book.Title}</Typography>
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
                  top: 64,
                  left: 24,
                  bgcolor: '#0A3556',
                  color: 'white',
                  fontWeight: 'bold',
                  py: 0.5,
                  px: 1,
                  borderRadius: '4px',
                  zIndex: 1
                }}
              >
                -{Math.round(((book.price - book.discount) / book.price) * 100)}%
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
                src={book.images[0]}
                alt={book.Title}
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
              {book.Title}
            </Typography>

            {/* Author */}
            <Typography
              variant="subtitle1"
              sx={{
                color: '#666',
                mb: 2
              }}
            >
              Language: {book.Language}
            </Typography>

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

            {/* Stock */}
            <Typography
              variant="body2"
              sx={{
                color: book.stock > 0 ? 'green' : 'red',
                fontWeight: 600,
                mb: 1
              }}
            >
              {book.stock > 0 ? `In Stock (${book.stock} available)` : 'Out of Stock'}
            </Typography>

            {/* Price */}
            <Typography
              variant="h5"
              sx={{
                color: '#0A3556',
                fontWeight: 600,
                mb: 3
              }}
            >
              ${book.discount.toFixed(2)}
              {book.discount > 0 && (
                <Typography
                  variant="subtitle2"
                  component="span"
                  sx={{
                    color: '#666',
                    textDecoration: 'line-through',
                    ml: 1
                  }}
                >
                  ${book.price.toFixed(2)}
                </Typography>
              )}
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
                onClick={handleAddToCart}
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
              {book.category && (
                <Link
                  component={RouterLink}
                  to={`/category/${book.category}`}
                  sx={{
                    color: '#0A3556',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    },
                    mr: 1
                  }}
                >
                  {book.category}
                </Link>
              )}
            </Box>
          </Box>
        </Box>

        {/* Additional sections like reviews, related books, etc. can be added here */}
      </Container>
    </Box>
  )
}

export default BookDetails
