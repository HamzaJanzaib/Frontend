import React from 'react'
import Stack from '@mui/material/Stack';
import { Box, Typography, Divider, Container } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const TopStrip = () => {
    return (
        <Box sx={{
            width: '100%',
            bgcolor: '#0A3556', // Dark purple background
            color: 'white',
            py: 1
        }}>
            <Container maxWidth="lg">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocalPhoneIcon sx={{ mr: 1, fontSize: 18 }} />
                        <Typography variant="body2">+91 8374902234</Typography>
                    </Box>
                    <Stack direction="row" spacing={3}>
                        <FacebookIcon sx={{ fontSize: 18 }} />
                        <InstagramIcon sx={{ fontSize: 18 }} />
                        <LinkedInIcon sx={{ fontSize: 18 }} />
                        <XIcon sx={{ fontSize: 18 }} />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default TopStrip
