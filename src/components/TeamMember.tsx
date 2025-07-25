import { Stack, Avatar, Typography, useMediaQuery, useTheme } from "@mui/material";

type TeamMemberProps = {
    name: string;
    image: string | undefined;
    role: string;
};

export const TeamMember = ({ image, name, role }: TeamMemberProps) => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(900));

    return (
        <Stack alignItems='center' spacing={isSmallScreen ? 2 : 6} direction='row'>
            <Avatar alt={name.toLowerCase()} src={image} sx={{ width: isSmallScreen ? '60px' : '200px', height: isSmallScreen ? '60px' : '200px' }} />
            <Stack>
                <Typography
                    sx={{
                        WebkitTextStrokeWidth: isSmallScreen ? 0.2 : 0.5,
                        WebkitTextStrokeColor: '#000',
                    }}
                    color='primary'
                    variant={isSmallScreen ? 'h6' : 'h3'}>
                    {name}
                </Typography>
                <Typography
                    sx={{
                        WebkitTextStrokeWidth: 0.2,
                        WebkitTextStrokeColor: '#000',
                    }}
                    color='primary'
                    variant={isSmallScreen ? 'body1' : 'h4'}>
                    {role}
                </Typography>
            </Stack>
        </Stack>
    );
};