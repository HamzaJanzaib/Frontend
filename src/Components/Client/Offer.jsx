import React, { useState, useEffect } from 'react'
import { Box, Container, Typography, Stack } from '@mui/material'

const Offer = () => {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 768,
    hours: 1,
    minutes: 27,
    seconds: 55
  })

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime
        
        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  // Timer display component
  const TimerUnit = ({ value, label }) => (
    <Box sx={{ textAlign: 'center' }}>
      <Typography 
        variant="h5" 
        component="div"
        sx={{ 
          color: '#f05545',
          fontWeight: 700,
          lineHeight: 1
        }}
      >
        {value < 10 ? `0${value}` : value}
      </Typography>
      <Typography 
        variant="caption" 
        sx={{ 
          color: '#6c757d',
          fontSize: '0.7rem',
          textTransform: 'uppercase'
        }}
      >
        {label}
      </Typography>
    </Box>
  )

  // Pagination dots
  

  return (
    <Box 
      sx={{ 
        py: 5,
        px: 2,
        bgcolor: '#fff5f5',
        borderRadius: 4,
        overflow: 'hidden',
        my: 4,
        mx: { xs: 2, md: 4 }
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left side - Text content */}
          <Box sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
            <Typography 
              variant="h3" 
              component="h2"
              sx={{ 
                color: '#0A3556',
                fontWeight: 700,
                mb: 1,
                fontSize: { xs: '1.8rem', md: '2.2rem' }
              }}
            >
              All books are 50% off now!
              <br />
              Don't miss such a deal!
            </Typography>
            
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#6c757d',
                mb: 3,
                maxWidth: '80%'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
              eu feugiat amet, libero ipsum enim pharetra hac.
            </Typography>
            
            {/* Countdown timer */}
            <Stack 
              direction="row" 
              spacing={3}
              divider={
                <Typography 
                  sx={{ 
                    color: '#f05545', 
                    fontWeight: 700,
                    alignSelf: 'flex-start',
                    mt: 0.5
                  }}
                >
                  :
                </Typography>
              }
            >
              <TimerUnit value={timeLeft.days} label="days" />
              <TimerUnit value={timeLeft.hours} label="hour" />
              <TimerUnit value={timeLeft.minutes} label="mint" />
              <TimerUnit value={timeLeft.seconds} label="sec" />
            </Stack>
            
         
          </Box>
          
          {/* Right side - Book stack image */}
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', md: '45%' },
              height: { xs: 300, md: 350 }
            }}
          >
            <Box
              component="img"
              src="/OfferBooks.png" // Replace with your actual image path
              alt="Stack of books on sale"
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

export default Offer
