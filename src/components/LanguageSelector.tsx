import { Fab, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

type LanguageOption = { nativeName: string, flagName: string };

const lngs: Record<string, LanguageOption> = {
    en: { nativeName: 'English', flagName: 'ie' },
    nl: { nativeName: 'Dutch', flagName: 'nl' }
};

export const LanguageSelector = () => {
    const { i18n } = useTranslation();

    return (
        <Stack direction='row' spacing={1}>
            {Object.keys(lngs).map((lng) => {
                const { flagName, nativeName } = lngs[lng];
                return (
                    <Fab title={nativeName} onClick={() => i18n.changeLanguage(lng)} key={lng} sx={{ boxShadow: 'none', backgroundColor: '#fff' }} disableRipple size="small">
                        <span className={`fi fi-${flagName}`} style={{ opacity: i18n.resolvedLanguage === lng ? 1 : 0.5 }}></span>
                    </Fab>
                )
            })}
        </Stack>
    );
};