import { Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => { document.title = 'Lumos'; }, []);

  return (
    <PageContainer>
      <Typography color='secondary' variant='h3'>Welcome to the Lumos home page!</Typography>
    </PageContainer>
  );
}

export const Route = createFileRoute('/')({
  component: Index,
})