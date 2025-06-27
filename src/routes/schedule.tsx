import { Container, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

const Schedule = () => {
    return <Container disableGutters sx={{ p: ({ spacing }) => spacing(4), m: 0 }}>
        <Typography color='secondary' variant='h3'>Check the Lumos schedule!</Typography>
    </Container>
}

export const Route = createFileRoute('/schedule')({
    component: Schedule,
})