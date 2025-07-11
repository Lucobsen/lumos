import { createTheme, ThemeProvider } from '@mui/material';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Navbar } from '../components/Navbar';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffdb6e',
            light: '#FFE28B',
            dark: '#B2994D',
        },
        // change to shades of black
        secondary: {
            main: '#000',
            light: '#5F73AB',
            dark: '#273869',
        },
    },
    typography: {
        fontFamily: [
            'Open Sans fat', 'sans-serif'
        ].join(','),
    }
});

export const Route = createRootRoute({
    component: () => (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Outlet />
            <TanStackRouterDevtools />
        </ThemeProvider >
    ),
});