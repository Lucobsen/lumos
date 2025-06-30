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
                <LocationItem
                    locationUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.631332767064!2d4.937540877801506!3d52.37710457202424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6091a5c7af42f%3A0x4bde86172dda5596!2sKZ%20-%20Kompaszaal!5e0!3m2!1sen!2snl!4v1751300872893!5m2!1sen!2snl'
                    address='KNSM-Laan 311, 1019 LV Amsterdam'
                    openingHour='19:00'
                    closingHour='22:30'
                />
                <LocationItem
                    locationUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.26758235699!2d4.86597329797756!3d52.38369939989666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e27f54db8def%3A0x2c0f46e0384741a5!2sCliffordstudio!5e0!3m2!1sen!2snl!4v1751300963018!5m2!1sen!2snl'
                    address='Cliffordstraat 38, 1051 GV Amsterdam'
                    openingHour='19:00'
                    closingHour='22:30'
                />
            </Stack>
        </PageContainer >
    );
}

export const Route = createFileRoute('/locations')({
    component: Locations,
});