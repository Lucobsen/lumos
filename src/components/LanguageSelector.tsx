import { Fab, Menu, MenuItem, useTheme } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type LanguageOption = { nativeName: string, flagName: string };

const lngs: Record<string, LanguageOption> = {
    en: { nativeName: 'English', flagName: 'gb' },
    nl: { nativeName: 'Dutch', flagName: 'nl' }
};

export const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const { palette } = useTheme();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget);

    const handleClose = () =>
        setAnchorEl(null);

    const selected = lngs[i18n.resolvedLanguage ?? 'en'];

    return (
        <>
            <Fab
                onClick={handleClick}
                title={selected.nativeName}
                key={selected.nativeName}
                sx={{
                    boxShadow: 'none',
                    backgroundColor: '#fff'
                }}
                disableRipple
                size="small"
            >
                <span
                    className={`fi fi-${selected.flagName}`}>
                </span>
            </Fab >
            <Menu
                anchorEl={anchorEl}
                open={open}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        style: {
                            width: 'fit-content',
                            backgroundColor: palette.common.white,
                        },
                    },
                }}
            >
                {Object.keys(lngs).map((lng) => {
                    if (lng === i18n.resolvedLanguage) return;
                    const { flagName } = lngs[lng];
                    return (
                        <MenuItem
                            sx={{ minHeight: 'fit-content' }}
                            disableTouchRipple
                            key={lng}
                            onClick={() => {
                                i18n.changeLanguage(lng)
                                handleClose();
                            }}
                            disableRipple>
                            <span className={`fi fi-${flagName}`}></span>
                        </MenuItem>
                    )
                })}
            </Menu >
        </>
    );
};