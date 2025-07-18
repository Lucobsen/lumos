import { createTheme, ThemeProvider } from '@mui/material';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Navbar } from '../components/Navbar';
import { Analytics } from '@vercel/analytics/react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffdb6e',
            light: '#FFE28B',
            dark: '#B2994D',
        },
        secondary: {
            main: '#000',
            light: '#333333',
            dark: '#000',
        },
    },
    typography: {
        fontFamily: [
            'Open Sans', 'sans-serif'
        ].join(','),
    }
});

export const Route = createRootRoute({
    component: () => (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Outlet />
            <Analytics />
            <TanStackRouterDevtools />
        </ThemeProvider >
    ),
});