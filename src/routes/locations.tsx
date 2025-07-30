import { createFileRoute } from '@tanstack/react-router';
import { PageContainer } from '../components/PageContainer';
import { useEffect } from 'react';
import { LocationItem } from '../components/LocationItem';
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

const Locations = () => {
    useEffect(() => { document.title = 'Lumos - Locations'; }, []);

    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(900));

    return (
        <PageContainer>
            <Typography
                color='black'
                variant={isSmallScreen ? 'h5' : 'h3'}
                textAlign='center'
                mb={2}>
                Come dance at our stunning locations!
            </Typography>
            <Stack justifyContent='center' direction={isSmallScreen ? 'column' : 'row'} spacing={8} width='100%'>
                <LocationItem
                    locationUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.631332767064!2d4.937540877801506!3d52.37710457202424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6091a5c7af42f%3A0x4bde86172dda5596!2sKZ%20-%20Kompaszaal!5e0!3m2!1sen!2snl!4v1751300872893!5m2!1sen!2snl'
                    address='KNSM-Laan 311, 1019 LV Amsterdam'
                    title='Kompaszaal'
                />
                <LocationItem
                    title='Veemhuis'
                    locationUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1801.5308550967645!2d4.884770331743998!3d52.390250219443686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6083292791ed5%3A0x7dcf3b06b6cee596!2sVeem%20House%20for%20Performance!5e0!3m2!1sen!2snl!4v1752346106591!5m2!1sen!2snl'
                    address='Van Diemenstraat 408-410, 1013 CR Amsterdam'
                />
            </Stack>
        </PageContainer >
    );
}

export const Route = createFileRoute('/locations')({
    component: Locations,
});