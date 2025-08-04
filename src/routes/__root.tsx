import { createTheme, ThemeProvider } from '@mui/material';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Navbar } from '../components/Navbar';
import { Analytics } from '@vercel/analytics/react';
import { Footer } from '../components/Footer';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 800,
            sm: 1000,
            md: 1200,
            lg: 1500,
            xl: 1800,
        }
    },
    palette: {
        primary: {
            main: '#ffdb6e',
            light: '#FFE28B',
            dark: '#B2994D',
        },
        secondary: {
            main: '#ffbb53',
            light: '#FFC875',
            dark: '#B2823A',
        },
    },
    typography: {
        fontFamily: [
            'DM Sans', 'Chau Philomene One', 'sans-serif'
        ].join(','),
    }
});

export const Route = createRootRoute({
    component: () => (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Outlet />
            <Footer />
            <Analytics />
            <TanStackRouterDevtools />
        </ThemeProvider >
    ),
});