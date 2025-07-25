import { IconButton, Menu, MenuItem, styled, useTheme } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

const StyledLink = styled(Link)`
    text-decoration: none;
    width: 100%;
    color: #000;

    &.active {
        text-decoration:underline;
        text-decoration-color: #000;
    }
`;

type NavItem = { label: string, to: string };

const navItems: NavItem[] = [
    { label: 'Home', to: '/' },
    { label: 'Schedule', to: '/schedule' },
    { label: 'Prices', to: '/prices' },
    { label: 'Locations', to: '/locations' },
    { label: 'Courses', to: '/courses' },
    { label: 'Contact', to: '/contact' }];

export const MobileNavMenu = () => {
    const { palette } = useTheme();
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget);

    const handleClose = () =>
        setAnchorEl(null);


    return (
        <>
            <IconButton onClick={handleClick} sx={{ color: '#000' }} size="large" disableRipple>
                <MenuRoundedIcon fontSize="large" />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        style: {
                            maxHeight: 320,
                            width: 160,
                            background: `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                        },
                    },
                }}
            >
                {navItems.map(({ label, to }) => (
                    <MenuItem key={label} onClick={handleClose} disableRipple >
                        <StyledLink to={to}>
                            {t(`navItems.${label.toLowerCase()}`)}
                        </StyledLink>
                    </MenuItem>
                ))}
            </Menu >
        </>
    );
}