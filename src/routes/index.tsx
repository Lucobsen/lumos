import { Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'

const Index = () => (
  <PageContainer>
    <Typography color='secondary' variant='h3'>Welcome to the Lumos home page!</Typography>
  </PageContainer>
);

export const Route = createFileRoute('/')({
  component: Index,
})