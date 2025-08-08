import { Stack, Typography, useMediaQuery, useTheme, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

type TeamMemberProps = {
    name: string;
    image: string | undefined;
    role: string;
};

export const TeamMember = ({ image, name, role }: TeamMemberProps) => {
    const { t } = useTranslation();
    const { breakpoints } = useTheme();
    const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));

    return (
        <Stack
            alignItems='center'
            spacing={2}>
            <Box
                component="img"
                loading='eager'
                boxShadow={({ shadows }) => shadows[8]}
                sx={{
                    height: isExtraSmallScreen ? '140px' : '400px',
                    width: isExtraSmallScreen ? '100px' : '250px',
                    display: 'block',
                    borderRadius: 10,
                    border: '4px solid #000'
                }}
                alt={name.toLowerCase()}
                src={image}
            />
            <Stack textAlign='center'>
                <Typography
                    color='black'
                    variant={isExtraSmallScreen ? 'h6' : 'h4'}>
                    {name}
                </Typography>
                <Typography
                    color='black'
                    variant={isExtraSmallScreen ? 'body1' : 'h5'}>
                    {t(role)}
                </Typography>
            </Stack>
        </Stack>
    );
};