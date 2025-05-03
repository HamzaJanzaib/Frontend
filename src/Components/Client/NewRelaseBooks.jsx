import React, { useState } from 'react'
import { Box, Container, Typography, Button, Stack } from '@mui/material'
import Card from './Card'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const NewRelaseBooks = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  
  // Sample book data
  const books = [
    [
      {
        id: 1,
        title: 'Simple Way Of Piece Life',
        author: 'Armor Ramsey',
        price: 40.00,
        image: 'https://book-point.com/wp-content/uploads/2025/04/9f5e2ed510376b4ddea2a18d60847fd5.png',
        link: '/books/1'
      },
        {
            id: 2,
            title: 'Great Travel At Desert',
            author: 'Sanchit Howdy',
            price: 38.00,
            image: 'https://book-point.com/wp-content/uploads/2025/04/099271dbbbce72533736ec080b297d43.png',
            link: '/books/2'
        },
      {
        id: 3,
        title: 'The Lady Beauty Scarlett',
        author: 'Arthur Doyle',
        price: 45.00,
        image: 'https://book-point.com/wp-content/uploads/2025/04/d37fc337aa70001b9cad2357e1c5499d.png',
        link: '/books/3'
      },
    ],
    // Add more slides as needed
    [
      {
        id: 4,
        title: 'Once Upon A Time',
        author: 'Klien Marry',
        price: 35.00,
        image: 'https://book-point.com/wp-content/uploads/2025/04/c167e031376c1d23c71b405bf566a74c.png',
        link: '/books/4'
      },
      {
        id: 5,
        title: 'The Art of Coding',
        author: 'Jane Smith',
        price: 42.00,
        image: 'https://book-point.com/wp-content/uploads/2025/04/abadc1b87f0a2bd940f7b9006edce905.png',
        link: '/books/5'
      },
      {
        id: 6,
        title: 'Modern Architecture',
        author: 'Frank Lloyd',
        price: 47.00,
        image: 'https://book-point.com/wp-content/uploads/2025/04/9f5e2ed510376b4ddea2a18d60847fd5.png',
        link: '/books/6'
      },
    ]
  ]

  // Filter out empty slides
  const nonEmptySlides = books.filter(slide => slide.length > 0)

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
          {nonEmptySlides[activeSlide]?.map((book) => (
            <Box key={book.id}>
              <Card book={book} />
            </Box>
          ))}
        </Box>
        
        {/* Pagination Dots - Only show if there are multiple slides */}
        {nonEmptySlides.length > 1 && (
          <Stack 
            direction="row" 
            spacing={1} 
            justifyContent="center" 
            sx={{ mt: 5 }}
          >
            {nonEmptySlides.map((_, index) => (
              <Box
                key={index}
                onClick={() => setActiveSlide(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: activeSlide === index ? '#f05545' : '#e0e0e0',
                  border: activeSlide === index ? '2px solid #f05545' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </Stack>
        )}
        
        {/* View All Link */}
        <Box sx={{ textAlign: 'right', mt: 2 }}>
          <Button
            component={Link}
            to="/products"
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
