import React, { useState, useEffect } from 'react'
import { Box, Container, Typography, Breadcrumbs, Link, Select, MenuItem, FormControl, Pagination, CircularProgress } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import FilterAside from '../../Components/Client/FilterAside'
import Card from '../../Components/Client/Card'
import axios from 'axios'

const Shop = () => {
  // State for sorting and pagination
  const [sortBy, setSortBy] = useState('price-high')
  const [page, setPage] = useState(1)
  const [displayedBooks, setDisplayedBooks] = useState([])
  const productsPerPage = 6

  // State for filters
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)
  const [allBooks, setBook] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/api/v1/Books/GetAllBooks`);
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
  }, []);

  // Handle price range filter
  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
    setPage(1); // Reset to first page when filter changes
  };

  // Handle category filter
  const handleCategoryChange = (category, subcategory) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    setPage(1); // Reset to first page when filter changes
  };

  // Filter, sort and paginate books
  useEffect(() => {
    if (!allBooks) return;

    // First apply all filters
    let filteredBooks = allBooks.filter(book => {
      // Price filter
      const passesPrice = book.price >= priceRange[0] && book.price <= priceRange[1];

      // Category filter
      let passesCategory = true;
      if (selectedCategory) {
        passesCategory = book.category === selectedCategory;

        // Subcategory filter (only if category matches and subcategory is selected)
        if (passesCategory && selectedSubcategory) {
          passesCategory = book.subcategory === selectedSubcategory;
        }
      }

      return passesPrice && passesCategory;
    });

    // Then apply sorting
    if (sortBy === 'price-low') {
      filteredBooks.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filteredBooks.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      filteredBooks.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
    } else if (sortBy === 'popularity') {
      filteredBooks.sort((a, b) => b.popularity - a.popularity);
    }

    // Apply pagination
    const indexOfLastBook = page * productsPerPage;
    const indexOfFirstBook = indexOfLastBook - productsPerPage;
    setDisplayedBooks(filteredBooks.slice(indexOfFirstBook, indexOfLastBook));

  }, [sortBy, page, priceRange, selectedCategory, selectedSubcategory, allBooks, productsPerPage]);

  // Calculate total filtered books for pagination
  const filteredBooks = allBooks ? allBooks.filter(book => {
    const passesPrice = book.price >= priceRange[0] && book.price <= priceRange[1];

    let passesCategory = true;
    if (selectedCategory) {
      passesCategory = book.category === selectedCategory;
      if (passesCategory && selectedSubcategory) {
        passesCategory = book.subcategory === selectedSubcategory;
      }
    }

    return passesPrice && passesCategory;
  }) : [];

  // Calculate pagination
  const totalPages = Math.ceil(filteredBooks.length / productsPerPage);

  // Calculate current range for display
  const indexOfLastBook = page * productsPerPage;
  const indexOfFirstBook = indexOfLastBook - productsPerPage;

  // Handle sort change
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
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
          <Typography color="text.primary">Books</Typography>
        </Breadcrumbs>

        {/* Main content area with sidebar and products */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Left Sidebar - Filter */}
          <Box sx={{ width: { xs: '100%', md: 280 }, flexShrink: 0 }}>
            <FilterAside
              onPriceRangeChange={handlePriceRangeChange}
              onCategoryChange={handleCategoryChange}
            />
          </Box>

          {/* Right Side - Products */}
          <Box sx={{ flexGrow: 1 }}>
            {/* Results count and sorting */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3
              }}
            >
              <Typography variant="body1" sx={{ color: '#333' }}>
                Showing {filteredBooks.length > 0 ? indexOfFirstBook + 1 : 0}-{Math.min(indexOfLastBook, filteredBooks.length)} of {filteredBooks.length} results
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ mr: 1, color: '#666' }}>
                  Sort by
                </Typography>
                <FormControl size="small" sx={{ minWidth: 180 }}>
                  <Select
                    value={sortBy}
                    onChange={handleSortChange}
                    displayEmpty
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#e0e0e0'
                      }
                    }}
                  >
                    <MenuItem value="newest">Newest</MenuItem>
                    <MenuItem value="price-low">Price: Low to High</MenuItem>
                    <MenuItem value="price-high">Price: High to Low</MenuItem>
                    <MenuItem value="popularity">Popularity</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            {/* Books Grid - Using CSS Grid with 3 equal columns */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 3,
                '@media (max-width: 900px)': {
                  gridTemplateColumns: 'repeat(2, 1fr)',
                },
                '@media (max-width: 600px)': {
                  gridTemplateColumns: '1fr',
                }
              }}
            >
              {console.log(displayedBooks)}
              {displayedBooks.map((book, i) => (
                <Box key={book._id}>
                  <Card key={i} Books={book} />
                </Box>
              ))}
            </Box>

            {/* No results message */}
            {displayedBooks.length === 0 && (
              <Box sx={{ textAlign: 'center', py: 5 }}>
                <Typography variant="h6" color="text.secondary">
                  No books match your filter criteria
                </Typography>
              </Box>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  shape="rounded"
                  sx={{
                    '& .MuiPaginationItem-root': {
                      color: '#0A3556',
                    },
                    '& .Mui-selected': {
                      bgcolor: '#0A3556 !important',
                      color: 'white !important'
                    }
                  }}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Shop
