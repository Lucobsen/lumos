import { Container, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

const Contact = () => {
    return <Container disableGutters sx={{ pt: 4 }}>
        <Typography color='secondary' variant='h3'>Lumos would love to hear from you!</Typography>
    </Container>
}

export const Route = createFileRoute('/contact')({
    component: Contact,
})