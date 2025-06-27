import { Container, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

const Prices = () => {
    return <Container disableGutters sx={{ p: ({ spacing }) => spacing(4), m: 0 }}>
        <Typography color='secondary' variant='h3'>Check out our prices!</Typography>
    </Container>
}

export const Route = createFileRoute('/prices')({
    component: Prices,
})