import { Stack, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { MobileNavMenu } from "./MobileNavMenu";

const StyledLink = styled(Link)`
    text-decoration: none; 

    &:hover {
      text-decoration: underline; 
      text-decoration-color: ${({ theme }) => theme.palette.secondary.light};
    }

    &.active {
      text-decoration: underline; 
      text-decoration-color: ${({ theme }) => theme.palette.secondary.main};
    }
`;

export const NavItems = () => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(900));
    const isMediumScreen = useMediaQuery(breakpoints.down(1100));

    if (isSmallScreen) return <MobileNavMenu />;

    return (
        <Stack direction='row' spacing={2}>
            <StyledLink to="/">
                <Typography color='secondary' variant={isMediumScreen ? 'h5' : 'h4'}>Home</Typography>
            </StyledLink>
            <StyledLink to="/schedule">
                <Typography color='secondary' variant={isMediumScreen ? 'h5' : 'h4'}>Schedule</Typography>
            </StyledLink>
            <StyledLink to="/prices">
                <Typography color='secondary' variant={isMediumScreen ? 'h5' : 'h4'}>Prices</Typography>
            </StyledLink>
            <StyledLink to="/locations">
                <Typography color='secondary' variant={isMediumScreen ? 'h5' : 'h4'}>Locations</Typography>
            </StyledLink>
            <StyledLink to="/courses">
                <Typography color='secondary' variant={isMediumScreen ? 'h5' : 'h4'}>Courses</Typography>
            </StyledLink>
            <StyledLink to="/contact">
                <Typography color='secondary' variant={isMediumScreen ? 'h5' : 'h4'}>Contact Us</Typography>
            </StyledLink>
        </Stack>
    );
}