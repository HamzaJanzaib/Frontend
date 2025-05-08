import React from 'react';
import Stack from '@mui/material/Stack';
import { Box, Typography, Container } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const TopStrip = () => {
    const theme = createTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ThemeProvider theme={theme}>

            <Box
                sx={{
                    width: '100%',
                    bgcolor: '#0A3556', // Dark purple background
                    color: 'white',
                    py: 1,
                }}
            >
                <Container maxWidth="lg"                >
                <Stack
                    direction={isSmallScreen ? "column" : 'row'}
                    justifyContent="space-between"
                    alignItems="center"
                    display={isSmallScreen ? "none" : 'flex'}
                    spacing={isSmallScreen ? 0 : 0}
                    padding={isSmallScreen ? "0px" : "8px"}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: isSmallScreen ? 'center' : 'flex-start' }}>
                        <LocalPhoneIcon sx={{ mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">+91 8374902234</Typography>
                    </Box>
                    <Stack
                        direction="row"
                        spacing={3}
                        justifyContent={isSmallScreen ? 'center' : 'flex-end'}
                    >
                        <FacebookIcon sx={{ fontSize: 18 }} />
                        <InstagramIcon sx={{ fontSize: 18 }} />
                        <LinkedInIcon sx={{ fontSize: 18 }} />
                        <XIcon sx={{ fontSize: 18 }} />
                    </Stack>
                </Stack>
            </Container>
        </Box>
        </ThemeProvider >
    );
};

export default TopStrip;
