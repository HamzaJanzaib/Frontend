import React from 'react'
import { Box, Container, Stack, Button, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
const BottumBar = () => {
    const navItems = [{
        name: 'HOME',
        path: '/',
    }, // Red color for HOME
    {
        name: 'ABOUT US',
        path: '/about'
    }, {
        name: 'BOOKS',
        path: '/books'
    },
    {
        name: 'NEW RELEASE',
        path: '/new-release'
    }, {
        name: 'CONTACT US',
        path: '/contact'
    },
    {
        name: 'BLOG',
        path: '/blog'
    }]
    return (
        <Box sx={{
            width: '100%',
            py: 1.5, 
            borderBottom: '1px solid #e0e0e0'
        }}>
            <Container maxWidth="lg">
                <Stack 
                    direction="row"
                    justifyContent="center" 
                    alignItems="center"
                    spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    {navItems.map((item, index) => (
                        <Button
                            key={index} 
                            component={Link}
                            to={item.path} 
                            sx={{
                                color: item.color || '#0A3556', 
                                fontWeight: 500,
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: '#0A3556'
                                },
                                px: 2
                            }}
                        >
                            {item.name}
                        </Button>
                    ))}
                </Stack>
            </Container>
        </Box>
    )
}

export default BottumBar


























