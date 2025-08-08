import { Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
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

export const OurTeam = () => {
    const { t } = useTranslation();
    const { breakpoints } = useTheme();
    const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));

    return (
        <Stack alignItems='center' width='100%' spacing={isExtraSmallScreen ? 1 : 4}>
            <Typography
                color='black'
                variant={isExtraSmallScreen ? 'h5' : 'h3'}
                textAlign='center'
                mb={2}>
                {t('contact.ourTeam')}
            </Typography>
            <Grid container justifyContent='center' columnSpacing={4} rowSpacing={6}>
                {team.map(({ name, avatar, role }) =>
                    <Grid size={{ xs: 6, sm: 6, md: 6, lg: 3, xl: 3 }} >
                        <TeamMember image={avatar} name={name} role={role} />
                    </Grid>
                )}
            </Grid>
        </Stack>
    );
};
