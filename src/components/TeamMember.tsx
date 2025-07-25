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
            <Avatar alt={name.toLowerCase()} src={image} sx={{ width: isSmallScreen ? '100px' : '200px', height: isSmallScreen ? '100px' : '200px' }} />
            <Stack>
                <Typography
                    color='black'
                    variant={isSmallScreen ? 'h4' : 'h3'}>
                    {name}
                </Typography>
                <Typography
                    color='black'
                    variant={isSmallScreen ? 'h5' : 'h4'}>
                    {role}
                </Typography>
            </Stack>
        </Stack>
    );
};