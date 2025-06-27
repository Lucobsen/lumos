import { Container, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

const Index = () => (
  <Container disableGutters sx={{ pt: 4 }}>
    <Typography color='secondary' variant='h3'>Welcome to the Lumos home page!</Typography>
  </Container>
)

export const Route = createFileRoute('/')({
  component: Index,
})