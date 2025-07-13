import { Skeleton, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from "@mui/material";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { Suspense } from "react";

type LocationItemProps = {
    address: string;
    title: string;
    locationUrl: string;
};

export const LocationItem = ({ title, address, locationUrl }: LocationItemProps) => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(1000));

    return (
        <Stack spacing={4} alignItems='center' direction={isSmallScreen ? 'column' : 'row'}>
            <Suspense fallback={<Skeleton height='300px' width={isSmallScreen ? '100%' : '600px'} />}>
                <iframe
                    height="300px"
                    width={isSmallScreen ? '100%' : '600px'}
                    loading="lazy"
                    frame-border="0"
                    style={{ border: 0 }}
                    referrer-policy="no-referrer-when-downgrade"
                    src={locationUrl}
                    allowFullScreen>
                </iframe>
            </Suspense>

            <Stack gap={2}>
                <Typography color='primary' variant='h2' sx={{ WebkitTextStrokeWidth: 2, WebkitTextStrokeColor: '#000', fontWeight: 'bold' }}>{title}</Typography>

                <Stack alignItems='center' direction='row' spacing={2}>
                    <SvgIcon inheritViewBox color="secondary"><LocationPinIcon /></SvgIcon>
                    <Typography color='secondary' variant='h5'>{address}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
};
