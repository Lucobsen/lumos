import { Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer';
import { useEffect } from 'react';

const Prices = () => {
    useEffect(() => { document.title = 'Lumos - Prices'; }, []);

    return (
        <PageContainer>
            <Typography color='secondary' variant='h3'>Check out our prices!</Typography>
        </PageContainer>
    );
}

export const Route = createFileRoute('/prices')({
    component: Prices,
})