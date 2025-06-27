import { Container, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

const Locations = () => {
    return <Container disableGutters sx={{ p: ({ spacing }) => spacing(4) }}>
        <Typography color='secondary' variant='h3'>Find us at these locations!</Typography>
    </Container>
}

export const Route = createFileRoute('/locations')({
    component: Locations,
})