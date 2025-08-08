import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { PageContainer } from '../components/PageContainer';
import { useEffect } from 'react';
import { PriceItem } from '../components/PriceItem';
import { useTranslation } from 'react-i18next';

export type PriceItemProps = {
    title: string;
    subtitle: string;
    info: string;
    cost: string;
    actionItem?: {
        actionText: string;
        actionUrl: string;
    }
};

const priceItems: PriceItemProps[] = [
    {
        title: 'prices.sixWeekCourse.title',
        subtitle: 'prices.sixWeekCourse.beginners',
        cost: '€90,-',
        info: 'prices.sixWeekCourse.info',
        actionItem: {
            actionText: 'prices.buy',
            actionUrl: 'https://www.bueno.nu/webshop/school/764/punch-card/45992'
        }
    },
    {
        title: 'prices.sixWeekCourse.title',
        subtitle: 'prices.sixWeekCourse.improvers',
        cost: '€90,-',
        info: 'prices.sixWeekCourse.info',
        actionItem: {
            actionText: 'prices.buy',
            actionUrl: 'https://www.bueno.nu/webshop/school/764/punch-card/45994'
        }
    },
    {
        title: 'prices.sixWeekCombo.title',
        subtitle: 'prices.sixWeekCombo.subtitle',
        cost: '€160,-',
        info: 'prices.sixWeekCombo.info',
        actionItem: {
            actionText: 'prices.buy',
            actionUrl: 'https://www.bueno.nu/webshop/school/764/punch-card/45997'
        }
    },
    {
        title: 'prices.punchCardSix.title',
        subtitle: 'prices.punchCardSix.subtitle',
        cost: '€90,-',
        info: 'prices.punchCardSix.info',
        actionItem: {
            actionText: 'prices.buy',
            actionUrl: 'https://www.bueno.nu/webshop/school/764/punch-card/45998'
        }
    },
    {
        title: 'prices.punchCardTwelve.title',
        subtitle: 'prices.punchCardTwelve.subtitle',
        cost: '€170,-',
        info: 'prices.punchCardTwelve.info',
        actionItem: {
            actionText: 'prices.buy',
            actionUrl: 'https://www.bueno.nu/webshop/school/764/punch-card/45999'
        }
    },
    {
        title: 'prices.singleClass.title',
        subtitle: 'prices.singleClass.subtitle',
        cost: '€16,-',
        info: 'prices.singleClass.info',
        actionItem: {
            actionText: 'prices.buy',
            actionUrl: 'https://www.bueno.nu/webshop/school/764/punch-card/46102'
        }
    }
];

const Prices = () => {
    useEffect(() => { document.title = 'Lumos - Prices'; }, []);

    const { t } = useTranslation();
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down('sm'));

    const spacing = 12 / priceItems.length;

    return (
        <PageContainer>
            <Typography
                color='black'
                variant={isSmallScreen ? 'h5' : 'h3'}
                textAlign='center'
                mb={2}>
                {t('prices.header')}
            </Typography>
            <Grid
                container
                columnSpacing={2}
                rowSpacing={4}
                justifyContent='center'
            >
                {priceItems.map(item =>
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: spacing }}>
                        <PriceItem {...item} />
                    </Grid>
                )}
            </Grid>
        </PageContainer >
    );
}

export const Route = createFileRoute('/prices')({
    component: Prices,
});