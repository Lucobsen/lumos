import { Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer';

const Locations = () => (
    <PageContainer>
        <Typography color='secondary' variant='h3'>Find us at these locations!</Typography>
    </PageContainer>
);

export const Route = createFileRoute('/locations')({
    component: Locations,
})