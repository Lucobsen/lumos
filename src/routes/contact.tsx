import { Avatar, Grid, Link, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { useEffect } from 'react';
import { Email, Instagram, PhoneAndroid } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

type TeamMember = { name: string; avatar?: string | undefined; role: string; };

const team: TeamMember[] = [
    {
        name: 'Pauline',
        avatar: 'pauline.jpeg',
        role: 'Owner & Teacher'
    },
    {
        name: 'Luke',
        avatar: 'luke.jpeg',
        role: 'Teacher'
    },
    {
        name: 'Zubaid',
        avatar: 'zubaid.jpg',
        role: 'Teacher'
    }
];

const Contact = () => {
    useEffect(() => { document.title = 'Lumos - Contact Us'; }, []);


    const { t } = useTranslation();
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(1000));

    return (
        <PageContainer>
            <Stack alignItems='center' spacing={isSmallScreen ? 6 : 8}>
                <Stack alignItems='center' width='100%' spacing={4}>
                    <Typography
                        color='primary'
                        variant={isSmallScreen ? 'h3' : 'h2'}
                        sx={{
                            whiteSpace: 'nowrap',
                            WebkitTextStrokeWidth: 2,
                            WebkitTextStrokeColor: '#000',
                            fontWeight: 'bold'
                        }}>
                        {t('contact.ourTeam')}
                    </Typography>
                    <Grid container spacing={isSmallScreen ? 6 : 10} justifyContent='center'>
                        {team.map(({ name, avatar, role }) =>
                            <Grid size={4}>
                                <Stack alignItems='center' spacing={1}>
                                    <Avatar alt={name} src={avatar} sx={{ width: isSmallScreen ? '60px' : '120px', height: isSmallScreen ? '60px' : '120px' }} />
                                    <Typography color='secondary' variant='h5'>{name}</Typography>
                                    <Typography color='secondary' variant='h6' textAlign='center'>{role}</Typography>
                                </Stack>
                            </Grid>
                        )}
                    </Grid>
                </Stack>

                <Stack alignItems='center' spacing={4}>
                    <Typography whiteSpace='pre-line' color='secondary' variant='h5' textAlign='center' mb={2}> {t('contact.questions')}</Typography>

                    <Stack alignItems='left' p={2} border={2} borderRadius={2} borderColor='secondary.main' direction='column' spacing={2} bgcolor='primary.light'>
                        <Stack direction='row' alignItems='center' spacing={2}>
                            <SvgIcon color='secondary' inheritViewBox>
                                <PhoneAndroid />
                            </SvgIcon>
                            <Typography color='secondary' variant='h6'>+31 999 99999 999</Typography>
                        </Stack>

                        <Stack direction='row' alignItems='center' gap={2}>
                            <SvgIcon color='secondary' inheritViewBox>
                                <Email />
                            </SvgIcon>
                            <Link underline='none' href='mailto:info@lumoslatin.nl'>
                                <Typography color='secondary' variant='h6'>info@lumoslatin.nl</Typography>
                            </Link>
                        </Stack>

                        <Stack direction='row' alignItems='center' gap={2}>
                            <SvgIcon color='secondary' inheritViewBox>
                                <Instagram />
                            </SvgIcon>
                            <Link underline='none' target='_blank' href='https://www.instagram.com/lumoslatin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                                <Typography color='secondary' variant='h6'>lumoslatin</Typography>
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </PageContainer>
    );
};

export const Route = createFileRoute('/contact')({
    component: Contact,
});