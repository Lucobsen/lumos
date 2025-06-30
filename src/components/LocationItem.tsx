import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

type LocationItemProps = {
    address: string;
    openingHour: string;
    closingHour: string;
    locationUrl: string;
};

export const LocationItem = ({ address, openingHour, closingHour, locationUrl }: LocationItemProps) => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(900));

    return (
        <Stack p={2} border={2} borderRadius={2} borderColor='secondary.main' direction={isSmallScreen ? 'column' : 'row'} gap={2} bgcolor='primary.light'>
            <iframe
                width={isSmallScreen ? "100%" : "450"}
                height="250"
                frame-border="0"
                style={{ border: 0 }}
                referrer-policy="no-referrer-when-downgrade"
                src={locationUrl}
                allowFullScreen>
            </iframe>

            <Stack gap={4} justifyContent='center'>
                <Stack>
                    <Typography color='secondary' variant='h4'>Address:</Typography>
                    <Typography color='secondary' variant='h4'>{address}</Typography>
                </Stack>

                <Stack>
                    <Typography color='secondary' variant='h4'>Opening Hours:</Typography>
                    <Typography color='secondary' variant='h4'>{openingHour} - {closingHour}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
};
