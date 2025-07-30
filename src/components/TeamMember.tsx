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
    const isSmallScreen = useMediaQuery(breakpoints.down(900));

    return (
        <Stack
            alignItems='center'
            spacing={2}>
            <Box
                component="img"
                loading='eager'
                boxShadow={({ shadows }) => shadows[8]}
                sx={{
                    height: isSmallScreen ? '300px' : '400px',
                    width: isSmallScreen ? '200px' : '250px',
                    display: 'block',
                    borderRadius: 10,
                    border: '4px solid #000'
                }}
                alt={name.toLowerCase()}
                src={image}
            />
            <Stack alignItems='center'>
                <Typography
                    color='black'
                    variant={isSmallScreen ? 'h6' : 'h4'}>
                    {name}
                </Typography>
                <Typography
                    color='black'
                    variant={isSmallScreen ? 'body1' : 'h5'}>
                    {t(role)}
                </Typography>
            </Stack>
        </Stack>
    );
};