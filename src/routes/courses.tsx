import { Container, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

const Courses = () => {
    return <Container disableGutters sx={{ pt: 4 }}>
        <Typography color='secondary' variant='h3'>Check out all the amaxzing courses we have to offer!</Typography>
    </Container>
}

export const Route = createFileRoute('/courses')({
    component: Courses,
})