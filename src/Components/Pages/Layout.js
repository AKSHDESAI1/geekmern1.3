import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';


const Layout = () => {
    return (
        <>
            <CssBaseline />
            <Box component="main" sx={{ p: 4 }}>
                <Navbar />
            </Box>

            <Outlet />
        </>
    )
}

export default Layout;