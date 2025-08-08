import { Link, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Email, PhoneAndroid, WhatsApp } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export const ContactUsItems = () => {
    const { t } = useTranslation();
    const { breakpoints } = useTheme();
    const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));

    return (
        <Stack spacing={isExtraSmallScreen ? 1 : 4} alignItems='center'>
            <Typography
                color='black'
                variant={isExtraSmallScreen ? 'h5' : 'h3'}
                textAlign='center'>
                {t('contact.contactUs')}
            </Typography>
            <Stack
                width='fit-content'
                sx={{
                    background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                }}
                alignItems='flex-start'
                p={2}
                border={2}
                borderRadius={2}
                borderColor='black'
                direction='column'
                spacing={isExtraSmallScreen ? 1 : 2}>
                <Link gap={2} alignItems='center' display='flex' flexDirection='row' underline='none' href="tel:+31628452492">
                    <SvgIcon sx={{ color: '#000' }} inheritViewBox fontSize={isExtraSmallScreen ? 'small' : 'large'}>
                        <PhoneAndroid />
                    </SvgIcon>
                    <Typography color='black' variant={isExtraSmallScreen ? 'body1' : 'h5'}>+31 6 28452492</Typography>
                </Link>

                <Link gap={2} alignItems='center' display='flex' flexDirection='row' underline='none' href="https://wa.me/31628452492" target="_blank">
                    <SvgIcon sx={{ color: '#000' }} inheritViewBox fontSize={isExtraSmallScreen ? 'small' : 'large'}>
                        <WhatsApp />
                    </SvgIcon>
                    <Typography color='black' variant={isExtraSmallScreen ? 'body1' : 'h5'}>+31 6 28452492</Typography>
                </Link>

                <Link gap={2} alignItems='center' display='flex' flexDirection='row' underline='none' href='mailto:info@lumoslatin.nl'>
                    <SvgIcon sx={{ color: '#000' }} inheritViewBox fontSize={isExtraSmallScreen ? 'small' : 'large'}>
                        <Email />
                    </SvgIcon>
                    <Typography color='black' variant={isExtraSmallScreen ? 'body1' : 'h5'}>info@lumoslatin.nl</Typography>
                </Link>
            </Stack>
        </Stack>
    );
};
