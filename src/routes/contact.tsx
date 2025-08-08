import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { PageContainer } from '../components/PageContainer';
import { useEffect } from 'react';
import { ContactUsItems } from '../components/ContactUsItems';
import { OurTeam } from '../components/OurTeam';
import { Faq } from '../components/Faq';

const Contact = () => {
    useEffect(() => { document.title = 'Lumos - Contact Us'; }, []);

    const { breakpoints } = useTheme();
    const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));

    return (
        <PageContainer>
            <Stack alignItems='center' spacing={isExtraSmallScreen ? 5 : 8} width='100%'>
                <ContactUsItems />
                <Faq />
                <OurTeam />
            </Stack>
        </PageContainer >
    );
};

export const Route = createFileRoute('/contact')({
    component: Contact,
});