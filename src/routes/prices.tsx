import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { PageContainer } from '../components/PageContainer';
import { useEffect } from 'react';
import { PriceItem } from '../components/PriceItem';

const Prices = () => {
    useEffect(() => { document.title = 'Lumos - Prices'; }, []);

    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(1000));

    return (
        <PageContainer>
            <Stack spacing={isSmallScreen ? 8 : 10}>
                <Stack alignItems='center'>
                    <Typography color='primary' variant={isSmallScreen ? 'h4' : 'h1'} sx={{ WebkitTextStrokeWidth: isSmallScreen ? 1 : 2, WebkitTextStrokeColor: '#000' }}>Courses</Typography>
                    <Typography textAlign='center' color='secondary' variant={isSmallScreen ? 'body1' : 'h6'}>Sign-up for a single course of your choosing.</Typography>

                    <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={4} mt={2}>
                        <PriceItem
                            title='6-week Course'
                            cost='€100'
                            infoItems={[
                                'Can be used for Salsa or Bachata'
                            ]}
                        />
                        <PriceItem
                            title='12-week Course'
                            cost='€100'
                            infoItems={[
                                'Can be used for Salsa or Bachata'
                            ]}
                        />
                    </Stack>
                </Stack>

                <Stack alignItems='center'>
                    <Typography textAlign='center' color='primary' variant={isSmallScreen ? 'h4' : 'h1'} sx={{ WebkitTextStrokeWidth: isSmallScreen ? 1 : 2, WebkitTextStrokeColor: '#000' }}>Punch Cards & Single Classes</Typography>
                    <Typography textAlign='center' color='secondary' variant={isSmallScreen ? 'body1' : 'h6'}>Buy a punch card for more flexability or join us for a single class.</Typography>

                    <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={4} mt={2}>
                        <PriceItem
                            cost='€65'
                            title='Punch Cards'
                            infoItems={[
                                'Valid for 5 classes'
                            ]}
                        />
                        <PriceItem
                            title='Single Class'
                            cost='€15'
                            infoItems={[
                                'Valid for a single class'
                            ]}
                        />
                    </Stack>
                </Stack>
            </Stack>
        </PageContainer >
    );
}

export const Route = createFileRoute('/prices')({
    component: Prices,
});