import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { PageContainer } from '../components/PageContainer';
import { useEffect } from 'react';
import { PriceItem } from '../components/PriceItem';

export type PriceItemProps = {
    title: string;
    subtitle: string;
    info: string;
    cost: string;
};

const priceItems: PriceItemProps[] = [
    {
        title: '6-week course',
        subtitle: 'for Beginners or Improvers',
        cost: '€90',
        info: 'Valid for Salsa or Bachata. Each week you join on the same day and time. You will be registered automatically for all 6 weeks.\n*P.S.sign up during our Try- Outs and get an amazing discount!',
    },
    {
        title: '6-week combo',
        subtitle: 'Double the fun:\nSalsa and Bachata for Beginners or Improvers',
        cost: '€160',
        info: 'Follow a Salsa and Bachata course of Beginners or Improvers. Each week you join on the same days and time. You will be registered automatically for all 12 classes. Valid for 14 weeks.\n*P.S.sign up during our Try- Outs and get an amazing discount!',
    },
    {
        title: 'Punch card - 6 classes',
        subtitle: 'for Improvers, Intermediate and Solo classes',
        cost: '€90',
        info: 'Purchase 6 separate classes and join whenever it suits you. Register for each class through our Bueno Students app. Valid for 8 weeks.\n*P.S.sign up during our Try- Outs and get an amazing discount!',
    },
    {
        title: 'Punch card - 12 classes',
        subtitle: 'for Improvers, Intermediate and Solo classes',
        cost: '€170',
        info: 'Purchase 12 separate classes and join whenever it suits you. Register for each class through our Bueno Students app. Valid for 4 months.\n*P.S.sign up during our Try- Outs and get an amazing discount!',
    },
    {
        title: 'Single Classes',
        subtitle: 'for Improvers or Intermediate',
        cost: '€16',
        info: '1. Select a class in the schedule and register directly for that specific class\n2. Buy a single credit and register later for a class of choice. Valid for 1 month',
    }
];

const Prices = () => {
    useEffect(() => { document.title = 'Lumos - Prices'; }, []);

    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(1000));

    return (
        <PageContainer>
            <Typography
                color='black'
                variant={isSmallScreen ? 'h5' : 'h3'}
                textAlign='center'
                mb={2}
                sx={{ textShadow: ({ palette }) => `0px 2px 2px ${palette.secondary.main}`, }}>
                Check out our courses & prices!
            </Typography>

            <Grid
                container
                size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}
                columnSpacing={2}
                rowSpacing={4}
                justifyContent='center'
            >
                {priceItems.map(item =>
                    <PriceItem {...item} />
                )}
            </Grid>
        </PageContainer >
    );
}

export const Route = createFileRoute('/prices')({
    component: Prices,
});