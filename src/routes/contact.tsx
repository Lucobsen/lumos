import { Grid, Link, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { PageContainer } from '../components/PageContainer';
import { useEffect } from 'react';
import { Email, Instagram } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { TeamMember } from '../components/TeamMember';

type TeamMember = { name: string; avatar?: string | undefined; role: string; };

const team: TeamMember[] = [
    {
        name: 'Pauline',
        avatar: 'pauline.jpeg',
        role: 'contact.ownerAndTeacher'
    },
    {
        name: 'Zubaid',
        avatar: 'zubaid.jpg',
        role: 'contact.teacher'
    },
    {
        name: 'Luke',
        avatar: 'luke.jpeg',
        role: 'contact.teacher'
    },
    {
        name: 'Yasmin',
        avatar: 'yas.jpg',
        role: 'contact.teacher'
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
                <Stack spacing={isSmallScreen ? 1 : 4} alignItems='center'>
                    <Typography
                        color='black'
                        variant={isSmallScreen ? 'h5' : 'h3'}
                        textAlign='center'>
                        {t('contact.contactUs')}
                    </Typography>
                    <Stack
                        width='fit-content'
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
                        </Stack> */}

                        <Link gap={2} alignItems='center' display='flex' flexDirection='row' underline='none' href='mailto:info@lumoslatin.nl'>
                            <SvgIcon sx={{ color: '#000' }} inheritViewBox fontSize={isSmallScreen ? 'small' : 'large'}>
                                <Email />
                            </SvgIcon>
                            <Typography color='black' variant={isSmallScreen ? 'body1' : 'h5'}>info@lumoslatin.nl</Typography>
                        </Link>
                    </Stack>
                </Stack>

                <Stack alignItems='center' width='100%' spacing={isSmallScreen ? 1 : 4}>
                    <Typography
                        color='black'
                        variant={isSmallScreen ? 'h5' : 'h3'}
                        textAlign='center'
                        mb={2}>
                        {t('contact.ourTeam')}
                    </Typography>
                    <Grid container justifyContent='center' columnSpacing={4} rowSpacing={6}>
                        {team.map(({ name, avatar, role }) =>
                            <Grid size={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 3 }} >
                                <TeamMember image={avatar} name={name} role={role} />
                            </Grid>
                        )}
                    </Grid>
                </Stack>
            </Stack>
        </PageContainer >
    );
};

export const Route = createFileRoute('/contact')({
    component: Contact,
});