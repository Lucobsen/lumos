import { AppBar, Box, Button, Stack, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { NavItems } from "./NavItems";
import { Link } from "@tanstack/react-router";
import { LanguageSelector } from "./LanguageSelector";

export const Navbar = () => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(1000));

    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ justifyContent: 'center', height: isSmallScreen ? 80 : 100, px: isSmallScreen ? 2 : 8, borderBottom: '4px solid #000' }}>
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                <Link to="/">
                    <Button variant='text' color='secondary' sx={{ fontSize: isSmallScreen ? '2rem' : '3rem', backgroundColor: 'transparent' }} disableRipple >
                        LUMOS
                    </Button>
                </Link>

                <Stack direction='row' spacing={isSmallScreen ? 2 : 4} alignItems='center'>
                    <NavItems />

                    <LanguageSelector />
                </Stack>
            </Toolbar>
        </AppBar>
    </Box >);
};