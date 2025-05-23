import React, { useState } from 'react'
import { Box, Typography, TextField, Button, Select, MenuItem, FormControl } from '@mui/material'

const ShippingCalculator = () => {
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [Address, setAddress] = useState('')

  const CompleteAddress = `${Address} | ${country} | ${state} | ${zipCode}`
  console.log(CompleteAddress)

  const handleCalculate = () => {
    console.log('Calculating shipping for:', { country, state, zipCode })
  }

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>
        Calculated Shipping
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <Select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          displayEmpty
          renderValue={country !== '' ? undefined : () => "Country"}
          sx={{
            bgcolor: '#f5f5f5',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent'
            }
          }}
        >
          <MenuItem value="PK">Pakistan</MenuItem>
          <MenuItem value="IN">India</MenuItem>
        </Select>
      </FormControl>
      <TextField
        placeholder="Enter Your Address"
        fullWidth
        value={Address}
        onChange={(e) => setAddress(e.target.value)}
        sx={{
          mb: 2,
          bgcolor: '#f5f5f5',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent'
          }
        }}
      />
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <FormControl sx={{ flex: 1 }}>
          <Select
            value={state}
            onChange={(e) => setState(e.target.value)}
            displayEmpty
            renderValue={state !== '' ? undefined : () => "State / City"}
            sx={{
              bgcolor: '#f5f5f5',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent'
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent'
              }
            }}
          >
            <MenuItem value="Karachi">Karachi</MenuItem>
            <MenuItem value="Lahore">Lahore</MenuItem>
            <MenuItem value="Islamabad">Islamabad</MenuItem>
            <MenuItem value="Multa">Multa</MenuItem>
            <MenuItem value="Rawalpandi">Rawalpandi</MenuItem>
          </Select>
        </FormControl>

        <TextField
          placeholder="ZIP Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          sx={{
            flex: 1,
            bgcolor: '#f5f5f5',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent'
            }
          }}
        />
      </Box>

      <Button
        variant="contained"
        fullWidth
        onClick={handleCalculate}
        sx={{
          bgcolor: '#000',
          color: '#fff',
          py: 1.5,
          '&:hover': {
            bgcolor: '#333'
          }
        }}
      >
        Update
      </Button>
    </Box>
  )
}

export default ShippingCalculator