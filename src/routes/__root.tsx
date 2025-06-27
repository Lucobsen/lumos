import { AppBar, Box, Button, createTheme, ThemeProvider, Toolbar } from '@mui/material';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { NavItems } from '../components/NavItems';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffdb6e',
            light: '#FFE28B',
            dark: '#B2994D',
        },
        secondary: {
            main: '#385097',
            light: '#5F73AB',
            dark: '#273869',
        },
    },
    typography: {
        fontFamily: [
            'Chau Philomene One',
            'Montserrat Classic'
        ].join(','),
    }
});

export const Route = createRootRoute({
    component: () => (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ justifyContent: 'center', height: 120 }}>
                    <Toolbar>
                        <Link to="/">
                            <Button variant='text' color='secondary' sx={{ fontSize: '4rem', padding: ({ spacing }) => spacing(0, 10, 0, 0), backgroundColor: 'transparent' }} disableRipple >
                                LUMOS
                            </Button>
                        </Link>
                        <NavItems />
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet />
            <TanStackRouterDevtools />
        </ThemeProvider >


    ),
})