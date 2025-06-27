import { Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer';

const Schedule = () => (
    <PageContainer>
        <Typography color='secondary' variant='h3'>Check the Lumos schedule!</Typography>
    </PageContainer>
);

export const Route = createFileRoute('/schedule')({
    component: Schedule,
})