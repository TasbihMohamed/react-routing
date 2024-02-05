import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Stack } from '@mui/material';

export default function Layout() {
  return (
    <Stack
      direction="column"
      sx={{ display: 'flex', flexFlow: 'column', minHeight: '100vh' }}
    >
      <Navbar />
      <Stack sx={{ flex: 1 }}>
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
}