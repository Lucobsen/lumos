import { Stack, styled, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";

const StyledLink = styled(Link)`
    text-decoration: none; 

    &:hover {
      text-decoration: underline; 
      text-decoration-color: ${({ theme }) => theme.palette.secondary.light};

      h4 {
        color: ${({ theme }) => theme.palette.secondary.light};
      }
    }

    &.active {
      text-decoration: underline; 
      text-decoration-color: ${({ theme }) => theme.palette.secondary.main};
    }
`;

export const NavItems = () => (
    <Stack direction='row' spacing={2}>
        <StyledLink to="/">
            <Typography color='secondary' variant='h4'>Home</Typography>
        </StyledLink>
        <StyledLink to="/schedule">
            <Typography color='secondary' variant='h4'>Schedule</Typography>
        </StyledLink>
        <StyledLink to="/prices">
            <Typography color='secondary' variant='h4'>Prices</Typography>
        </StyledLink>
        <StyledLink to="/locations">
            <Typography color='secondary' variant='h4'>Locations</Typography>
        </StyledLink>
        <StyledLink to="/courses">
            <Typography color='secondary' variant='h4'>Courses</Typography>
        </StyledLink>
        <StyledLink to="/contact">
            <Typography color='secondary' variant='h4'>Contact Us</Typography>
        </StyledLink>
    </Stack>
);