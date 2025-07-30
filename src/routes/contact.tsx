import { Grid, Link, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { PageContainer } from '../components/PageContainer';
import { useEffect } from 'react';
import { Instagram } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { TeamMember } from '../components/TeamMember';

type TeamMember = { name: string; avatar?: string | undefined; role: string; };

const team: TeamMember[] = [
    {
        name: 'Pauline',
        avatar: 'pauline.jpeg',
        role: 'Owner & Teacher'
    },
    {
        name: 'Zubaid',
        avatar: 'zubaid.jpg',
        role: 'Teacher'
    },
    {
        name: 'Luke',
        avatar: 'luke.jpeg',
        role: 'Teacher'
    },
    {
        name: 'Yasmin',
        avatar: 'yas.jpg',
        role: 'Teacher'
    }
];

const Contact = () => {
    useEffect(() => { document.title = 'Lumos - Contact Us'; }, []);

    const { t } = useTranslation();
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(900));

    return (
        <PageContainer>
            <Stack alignItems='center' spacing={isSmallScreen ? 6 : 8}>
                <Stack alignItems='center' width='100%' spacing={isSmallScreen ? 1 : 4}>
                    <Typography
                        color='black'
                        variant={isSmallScreen ? 'h5' : 'h3'}
                        textAlign='center'
                        mb={2}>
                        {t('contact.ourTeam')}
                    </Typography>
                    <Grid container size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} justifyContent='center' columnSpacing={10} rowSpacing={6}>
                        {team.map(({ name, avatar, role }) =>
                            <Grid>
                                <TeamMember image={avatar} name={name} role={role} />
                            </Grid>
                        )}
                    </Grid>
                </Stack>

                <Stack spacing={isSmallScreen ? 1 : 4}>
                    <Typography
                        color='black'
                        variant={isSmallScreen ? 'h5' : 'h3'}
                        textAlign='center'>
                        Contact Us
                    </Typography>
                    <Stack
                        sx={{
                            background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                        }}
                        alignItems='center'
                        p={2}
                        border={2}
                        borderRadius={2}
                        borderColor='black'
                        direction='column'
                        spacing={2}>
                        {/* <Stack direction='row' alignItems='center' spacing={2}>
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
                        </Stack> */}

                        <Stack direction='row' alignItems='center' gap={2}>
                            <SvgIcon sx={{ color: '#000' }} inheritViewBox fontSize={isSmallScreen ? 'small' : 'medium'}>
                                <Instagram />
                            </SvgIcon>
                            <Link underline='none' target='_blank' href='https://www.instagram.com/lumoslatin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                                <Typography color='black' variant={isSmallScreen ? 'body1' : 'h6'}>lumoslatin</Typography>
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