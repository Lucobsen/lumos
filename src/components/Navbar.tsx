import { AppBar, Box, Stack, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { NavItems } from "./NavItems";
import { Link } from "@tanstack/react-router";
import { LanguageSelector } from "./LanguageSelector";

export const Navbar = () => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(breakpoints.down('md'));

    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar
            position="fixed"
            sx={{
                background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                justifyContent: 'center',
                height: isSmallScreen ? 80 : 100,
                px: isSmallScreen ? 4 : 8,
            }}>
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                <Link to="/">
                    <Box
                        component="img"
                        sx={{
                            height: isSmallScreen ? '100px' : isMediumScreen ? '120px' : '160px',
                            width: isSmallScreen ? '100px' : isMediumScreen ? '120px' : '160px',
                        }}
                        alt="Lumos Logo"
                        src="lumos-logo-black.png"
                    />
                </Link>

                <Stack direction='row' spacing={isSmallScreen ? 2 : 4} alignItems='center'>
                    <NavItems />
                    <LanguageSelector />
                </Stack>
            </Toolbar>
        </AppBar>
    </Box >);
};