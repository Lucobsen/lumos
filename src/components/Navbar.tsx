import { AppBar, Box, Button, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { NavItems } from "./NavItems";
import { Link } from "@tanstack/react-router";

export const Navbar = () => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(900));

    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ justifyContent: 'center', height: isSmallScreen ? 80 : 100, px: isSmallScreen ? 4 : 8, borderBottom: '4px solid #000' }}>
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                <Link to="/">
                    <Button variant='text' color='secondary' sx={{ fontSize: isSmallScreen ? '2rem' : '4rem', backgroundColor: 'transparent' }} disableRipple >
                        LUMOS
                    </Button>
                </Link>
                <NavItems />
            </Toolbar>
        </AppBar>
    </Box>);
};