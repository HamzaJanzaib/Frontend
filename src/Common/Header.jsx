import React, { useState } from 'react';
import TopStrip from '../Components/Header/TopStrip';
import CenterBar from '../Components/Header/CenterBar';
import BottumBar from '../Components/Header/BottumBar';
import { Accordion, AccordionSummary, Box, Stack, Typography, useMediaQuery } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {!isMobile && (
        <Box>
          <TopStrip />
          <CenterBar />
          <BottumBar />
        </Box>
      )}
      {isMobile && (
        <Box>
          <Stack
            direction="row"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px',
            }}
          >
            <Box>
              <Link to="/">
                <img src="/logo.png" alt="" />
              </Link>
            </Box>
            <Box onClick={toggleMenu} sx={{ cursor: 'pointer' }}>
              <MenuOpenIcon />
            </Box>
          </Stack>
        </Box>
      )}



      {menuOpen && (
        <Box>
          <Stack>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header" >
                <Typography component="span">Pages</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: "fit-content",
                  margin: "auto"
                }}

              >
                <Link to="/">
                  <Button
                    sx={{
                      width: '80%',
                      marginLeft: '10%',
                      backgroundColor: isActive('/') ? '#0A3556' : 'transparent',
                      color: isActive('/') ? '#fff' : 'inherit',
                      ':hover': {
                        backgroundColor: '#0A3556',
                        color: '#fff',
                      },
                    }}
                  >
                    Home
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    sx={{
                      width: '80%',
                      marginLeft: '10%',
                      backgroundColor: isActive('/about') ? '#0A3556' : 'transparent',
                      color: isActive('/about') ? '#fff' : 'inherit',
                      ':hover': {
                        backgroundColor: '#0A3556',
                        color: '#fff',
                      },
                    }}
                  >
                    About US
                  </Button>
                </Link>
                <Link to="/books">
                  <Button
                    sx={{
                      width: '80%',
                      marginLeft: '10%',
                      backgroundColor: isActive('/books') ? '#0A3556' : 'transparent',
                      color: isActive('/books') ? '#fff' : 'inherit',
                      ':hover': {
                        backgroundColor: '#0A3556',
                        color: '#fff',
                      },
                    }}
                  >
                    Books
                  </Button>
                </Link>
                <Link to="/Contact">
                  <Button
                    sx={{
                      width: '80%',
                      marginLeft: '10%',
                      backgroundColor: isActive('/Contact') ? '#0A3556' : 'transparent',
                      color: isActive('/Contact') ? '#fff' : 'inherit',
                      ':hover': {
                        backgroundColor: '#0A3556',
                        color: '#fff',
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button
                    sx={{
                      width: '80%',
                      marginLeft: '10%',
                      backgroundColor: isActive('/blog') ? '#0A3556' : 'transparent',
                      color: isActive('/blog') ? '#fff' : 'inherit',
                      ':hover': {
                        backgroundColor: '#0A3556',
                        color: '#fff',
                      },
                    }}
                  >
                    Blog
                  </Button>
                </Link>
                <Link to="/Profile">
                  <Button
                    sx={{
                      width: '80%',
                      marginLeft: '10%',
                      backgroundColor: isActive('/Profile') ? '#0A3556' : 'transparent',
                      color: isActive('/Profile') ? '#fff' : 'inherit',
                      ':hover': {
                        backgroundColor: '#0A3556',
                        color: '#fff',
                      },
                    }}
                  >
                    Profile
                  </Button>
                </Link>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    mt: '20px',
                  }}
                >
                  <Link to="/logout">
                    <Button
                      sx={{
                        width: '80%',
                        marginLeft: '10%',
                        padding: '10px 30px',
                        backgroundColor: '#ba000d',
                        color: '#fff',
                      }}
                    >
                      Logout
                    </Button>
                  </Link>
                  <Link to="/Dashboard">
                    <Button
                      sx={{
                        width: '80%',
                        marginLeft: '10%',
                        padding: '10px 30px',
                        backgroundColor: '#0A3556',
                        color: '#fff',
                      }}
                    >
                      Dashboard
                    </Button>
                  </Link>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Box>
      )}
    </div>
  );
};

export default Header;