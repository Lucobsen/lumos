import { Container, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

const Schedule = () => {
    return <Container disableGutters sx={{ pt: 4 }}>
        <Typography color='secondary' variant='h3'>Check the Lumos schedule!</Typography>
    </Container>
}

export const Route = createFileRoute('/schedule')({
    component: Schedule,
})