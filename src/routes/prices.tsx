import { Container, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

const Prices = () => {
    return <Container disableGutters sx={{ pt: 4 }}>
        <Typography color='secondary' variant='h3'>Check out our prices!</Typography>
    </Container>
}

export const Route = createFileRoute('/prices')({
    component: Prices,
})