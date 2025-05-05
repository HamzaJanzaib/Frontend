import React, { useState } from 'react'
import { Box, Typography, List, ListItem, ListItemText, Slider, Button, Divider } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useNavigate } from 'react-router-dom'

const FilterAside = ({ onPriceRangeChange, onCategoryChange }) => {
  const navigate = useNavigate()
  const [priceRange, setPriceRange] = useState([200, 2000])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)

  // Categories data
  const categories = [
    {
      name: 'commic',
      count: 10,
      color: '#0A3556',
    },
    {
      name: 'Computer & Technology',
      count: 148,
    },
    {
      name: 'non-fiction',
      count: 24,
    },
    {
      name: 'Romance',
      count: 24,
    },
    {
      name: 'Litrature',
      count: 24,
    },  
    {
      name: 'un-categorized',
      count: 155,
    },
  ]

  // Handle price range change
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue)
  }

  // Handle category click
  const handleCategoryClick = (category) => {
    if (selectedCategory === category.name) {
      setSelectedCategory(null)
      setSelectedSubcategory(null)
      onCategoryChange && onCategoryChange(null, null)
      navigate('/shop')
    } else {
      setSelectedCategory(category.name)
      setSelectedSubcategory(null)
      onCategoryChange && onCategoryChange(category.name, null)
      navigate(`/Category/${category.name}`)
    }
  }

  // Handle subcategory click
  const handleSubcategoryClick = (categoryName, subcategory, e) => {
    e.stopPropagation()
    if (selectedSubcategory === subcategory.name) {
      setSelectedSubcategory(null)
      onCategoryChange && onCategoryChange(selectedCategory, null)
      navigate(`/Category/${categoryName}`)
    } else {
      setSelectedSubcategory(subcategory.name)
      onCategoryChange && onCategoryChange(categoryName, subcategory.name)
      navigate(`/Category/${categoryName}/${subcategory.name}`)
    }
  }

  // Handle filter button click
  const handleFilterClick = () => {
    onPriceRangeChange && onPriceRangeChange(priceRange)
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 300 }}>
      <Box>
        {/* Categories Section */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2,
            color: '#333'
          }}
        >
          Categories
        </Typography>

        <List sx={{ mb: 4 }} disablePadding>
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <ListItem
                sx={{
                  py: 0.5,
                  px: 0,
                  '&:hover': {
                    color: '#0A3556'
                  },
                  bgcolor: selectedCategory === category.name ? 'rgba(10, 53, 86, 0.05)' : 'transparent',
                  borderLeft: selectedCategory === category.name ? '3px solid #0A3556' : 'none',
                  pl: selectedCategory === category.name ? 1 : 0
                }}
                button
                onClick={() => handleCategoryClick(category)}
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        color: category.color || (selectedCategory === category.name ? '#0A3556' : 'inherit')
                      }}
                    >
                      {category.name}
                    </Typography>
                  }
                />
                <Typography variant="body2" color="text.secondary">
                  ({category.count})
                </Typography>
              </ListItem>

              {/* Subcategories */}
              {category.subcategories && selectedCategory === category.name && category.subcategories.map((sub, subIndex) => (
                <ListItem
                  key={`${index}-${subIndex}`}
                  sx={{
                    py: 0.5,
                    px: 2,
                    '&:hover': {
                      color: '#0A3556'
                    },
                    bgcolor: selectedSubcategory === sub.name ? 'rgba(10, 53, 86, 0.05)' : 'transparent'
                  }}
                  button
                  onClick={(e) => handleSubcategoryClick(category.name, sub, e)}
                >
                  <KeyboardArrowRightIcon fontSize="small" sx={{ mr: 1 }} />
                  <ListItemText
                    primary={
                      <Typography 
                        variant="body2"
                        sx={{
                          color: selectedSubcategory === sub.name ? '#0A3556' : 'inherit',
                          fontWeight: selectedSubcategory === sub.name ? 500 : 400
                        }}
                      >
                        {sub.name}
                      </Typography>
                    }
                  />
                  <Typography variant="body2" color="text.secondary">
                    ({sub.count})
                  </Typography>
                </ListItem>
              ))}
            </React.Fragment>
          ))}
        </List>

        {/* Filter By Price Section */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2,
            color: '#333'
          }}
        >
          Filter By Price
        </Typography>

        <Box sx={{ px: 1, mb: 2 }}>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="off"
            min={0}
            max={5000}
            sx={{
              color: '#0A3556',
              '& .MuiSlider-thumb': {
                height: 20,
                width: 20,
                backgroundColor: '#fff',
                border: '2px solid #0A3556',
                '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                  boxShadow: 'inherit',
                }
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#e0e0e0',
                height: 4
              }
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Button
            variant="contained"
            onClick={handleFilterClick}
            sx={{
              bgcolor: '#0A3556',
              borderRadius: 50,
              px: 4,
              '&:hover': {
                bgcolor: '#0A3556'
              }
            }}
          >
            Filter
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: '#333'
          }}
        >
          Price: $ {priceRange[0]} — $ {priceRange[1]}
        </Typography>
      </Box>
    </Box>
  )
}

export default FilterAside
