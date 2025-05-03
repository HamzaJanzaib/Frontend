import React, { useState } from 'react'
import { Box, Container, Typography, Button, Stack } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    
    // Sample book covers - replace with your actual images
    const slides = [
        {
            title: 'Ipsum Dolor Si',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
            image: 'https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img1-12.png' // Replace with your actual image path
        },
        // Add more slides as needed
    ]

    return (
        <Box
            sx={{
                py: 8,
                bgcolor: '#f8f9fa',
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', padding: 0 }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={4}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    {/* Left side - Text content */}
                    <Box sx={{ maxWidth: { xs: '100%', md: '45%' }, zIndex: 1, pl: { xs: 2, md: 4 } }}>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                color: '#0A3556',
                                fontWeight: 700,
                                mb: 2,
                                fontSize: { xs: '2.5rem', md: '3.5rem' }
                            }}
                        >
                            {slides[activeSlide].title}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: '#6c757d',
                                mb: 4,
                                lineHeight: 1.7
                            }}
                        >
                            {slides[activeSlide].description}
                        </Typography>

                        <Button
                            variant="outlined"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                borderRadius: 50,
                                px: 3,
                                py: 1,
                                borderColor: '#0A3556',
                                color: '#0A3556',
                                '&:hover': {
                                    borderColor: '#0A3556',
                                    backgroundColor: 'rgba(63, 61, 86, 0.04)'
                                }
                            }}
                        >
                            READ MORE
                        </Button>
                        
                        {/* Pagination dots */}
                        {slides.length > 1 && (
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{
                                    mt: 4
                                }}
                            >
                                {slides.map((_, index) => (
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
                    </Box>

                    {/* Right side - Single book image */}
                    <Box
                        sx={{
                            position: 'relative',
                            height: 450,
                            width: { xs: '100%', md: '50%' },
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Box
                            component="img"
                            src={slides[activeSlide].image}
                            alt="Book covers"
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

export default Hero
