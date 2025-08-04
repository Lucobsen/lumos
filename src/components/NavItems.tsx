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
    const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));
    const isSmallScreen = useMediaQuery(breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(breakpoints.down('md'));

    if (isExtraSmallScreen) return <MobileNavMenu />;

    const variant = isSmallScreen ? 'body1' : isMediumScreen ? 'h6' : 'h5';

    return (
        <Stack direction='row' spacing={isMediumScreen ? 2 : 4}>
            <StyledLink to="/">
                <Typography color='black' variant={variant}>
                    {t("navItems.home")}
                </Typography>
            </StyledLink>
            <StyledLink to="/schedule">
                <Typography color='black' variant={variant}>
                    {t("navItems.schedule")}
                </Typography>
            </StyledLink>
            <StyledLink to="/prices">
                <Typography color='black' variant={variant}>
                    {t("navItems.prices")}
                </Typography>
            </StyledLink>
            <StyledLink to="/locations">
                <Typography color='black' variant={variant}>
                    {t("navItems.locations")}
                </Typography>
            </StyledLink>
            <StyledLink to="/courses">
                <Typography color='black' variant={variant}>
                    {t("navItems.courses")}
                </Typography>
            </StyledLink>
            <StyledLink to="/contact">
                <Typography color='black' variant={variant}>
                    {t("navItems.contact")}
                </Typography>
            </StyledLink>
        </Stack >
    );
}