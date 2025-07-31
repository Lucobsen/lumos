import { Skeleton, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from "@mui/material";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { Suspense } from "react";

type LocationItemProps = {
    address: string;
    title: string;
    locationUrl: string;
};

export const LocationItem = ({ title, address, locationUrl }: LocationItemProps) => {
    const { breakpoints, shadows } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(1000));

    return (
        <Stack spacing={4} alignItems='center' width='100%'>
            <Suspense fallback={<Skeleton height={isSmallScreen ? "300px" : '400px'} width='100%' />}>
                <iframe
                    height={isSmallScreen ? "300px" : '400px'}
                    width='100%'
                    loading="lazy"
                    frame-border="0"
                    style={{
                        border: '4px solid #000',
                        borderRadius: 35,
                        boxShadow: shadows[8]
                    }}
                    referrer-policy="no-referrer-when-downgrade"
                    src={locationUrl}
                    allowFullScreen>
                </iframe>
            </Suspense>

            <Stack gap={2} alignItems='center'>
                <Typography
                    color='black'
                    variant={isSmallScreen ? 'h4' : 'h2'}
                    fontFamily='Chau Philomene One'
                    textAlign='center'>
                    {title}
                </Typography>
                <Stack direction='row' spacing={2} alignItems='center'>
                    <SvgIcon
                        inheritViewBox
                        sx={{ color: '#000' }}>
                        <LocationPinIcon />
                    </SvgIcon>
                    <Typography color='black' variant={isSmallScreen ? 'h6' : 'h5'}>{address}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
};
