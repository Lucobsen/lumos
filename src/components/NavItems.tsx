import { Stack, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { MobileNavMenu } from "./MobileNavMenu";
import { useTranslation } from 'react-i18next';

const StyledLink = styled(Link)`
    text-decoration: none;

    &.active {
        text-decoration: underline;
        text-decoration-color: #000;
    }
`;

export const NavItems = () => {
    const { t } = useTranslation();
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(1000));
    const isMediumScreen = useMediaQuery(breakpoints.down(1100));

    if (isSmallScreen) return <MobileNavMenu />;

    return (
        <Stack direction='row' spacing={2}>
            <StyledLink to="/">
                <Typography color='black' variant={isMediumScreen ? 'h6' : 'h5'}>
                    {t("navItems.home")}
                </Typography>
            </StyledLink>
            <StyledLink to="/schedule">
                <Typography color='black' variant={isMediumScreen ? 'h6' : 'h5'}>
                    {t("navItems.schedule")}
                </Typography>
            </StyledLink>
            <StyledLink to="/prices">
                <Typography color='black' variant={isMediumScreen ? 'h6' : 'h5'}>
                    {t("navItems.prices")}
                </Typography>
            </StyledLink>
            <StyledLink to="/locations">
                <Typography color='black' variant={isMediumScreen ? 'h6' : 'h5'}>
                    {t("navItems.locations")}
                </Typography>
            </StyledLink>
            <StyledLink to="/courses">
                <Typography color='black' variant={isMediumScreen ? 'h6' : 'h5'}>
                    {t("navItems.courses")}
                </Typography>
            </StyledLink>
            <StyledLink to="/contact">
                <Typography color='black' variant={isMediumScreen ? 'h6' : 'h5'}>
                    {t("navItems.contact")}
                </Typography>
            </StyledLink>
        </Stack >
    );
}