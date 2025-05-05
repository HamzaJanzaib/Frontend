import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, Button, Stack, CircularProgress } from '@mui/material'
import Card from './Card'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const NewRelaseBooks = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(books)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/v1/Books/ResentBooks');
        if (response.data && Array.isArray(response.data.data)) {
          setBooks(response.data.data);
        } else {
          setBooks([]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('Failed to fetch books. Please try again later.');
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Filter out empty slides
  const nonEmptySlides = books.filter(book => book && Object.keys(book).length > 0);
  console.log(nonEmptySlides)

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', color: 'error.main', py: 4 }}>
        <Typography variant="h6">{error}</Typography>
      </Box>
    );
  }

  if (nonEmptySlides.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h6">No books available at the moment.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#6c757d',
              mb: 1,
              textTransform: 'uppercase',
              letterSpacing: 1
            }}
          >
            SOME QUALITY ITEMS
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: '#0A3556',
              fontWeight: 700,
              mb: 4
            }}
          >
            New Release Books
          </Typography>
        </Box>

        {/* Books Grid - Using CSS Grid with 3 equal columns */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 4,
            '@media (max-width: 900px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
            '@media (max-width: 600px)': {
              gridTemplateColumns: '1fr',
            }
          }}
        >
          {nonEmptySlides.map((book) => (
            <Card key={book._id} Books={book} />
          ))}
        </Box>

        

        {/* View All Link */}
        <Box sx={{ textAlign: 'right', mt: 2 }}>
          <Button
            onClick={() => navigate('/books')}
            endIcon={<ArrowForwardIcon />}
            sx={{
              color: '#f05545',
              '&:hover': {  
                bgcolor: 'transparent',
                color: '#d03b2d'
              }
            }}
          >
            View All Products
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default NewRelaseBooks
