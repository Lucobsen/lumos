import { Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'

const Courses = () => (
    <PageContainer>
        <Typography color='secondary' variant='h3'>Check out all the amaxzing courses we have to offer!</Typography>
    </PageContainer>
)

export const Route = createFileRoute('/courses')({
    component: Courses,
})