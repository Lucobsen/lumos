import { createFileRoute } from '@tanstack/react-router';
import { PageContainer } from '../components/PageContainer';
import { useEffect } from 'react';
import { LocationItem } from '../components/LocationItem';
import { Stack } from '@mui/material';

const Locations = () => {
    useEffect(() => { document.title = 'Lumos - Locations'; }, []);

    return (
        <PageContainer>
            <Stack gap={4}>
                <LocationItem address='Admiraal de Ruijterweg 21, 1057 JT Amsterdam' openingHours='19:00 - 22:30' />
                <LocationItem address='Admiraal de Ruijterweg 21, 1057 JT Amsterdam' openingHours='19:00 - 22:30' />
            </Stack>
        </PageContainer >
    );
}

export const Route = createFileRoute('/locations')({
    component: Locations,
});