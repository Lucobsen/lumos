import { Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { useEffect } from 'react';

const Contact = () => {
    useEffect(() => { document.title = 'Lumos - Contact Us'; }, []);

    return (
        <PageContainer>
            <Typography color='secondary' variant='h3'>Lumos would love to hear from you!</Typography>
        </PageContainer>
    );
}

export const Route = createFileRoute('/contact')({
    component: Contact,
})