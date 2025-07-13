import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { createFileRoute, Link } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => { document.title = 'Lumos'; }, []);

  const { breakpoints } = useTheme();
  const isSmallScreen = useMediaQuery(breakpoints.down(900));

  return (
    <PageContainer disableBorders>
      <Box position='relative'>
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '100vh',
            position: 'absolute',
            opacity: 0.8,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          alt="Lumos Home Page"
          src="salsa-class.jpg"
        />
        <div style={{
          zIndex: 2,
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}></div>

        <Box sx={{
          position: 'relative',
          zIndex: 3,
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: isSmallScreen ? 6 : 10,
          p: isSmallScreen ? 2 : 4,
        }}>
          <Box>
            <Typography color='white' variant={isSmallScreen ? 'h5' : 'h3'} textAlign='center'>At Lumos we can show you the moves and give you the confidence to shine on every dancefloor, everywhere!</Typography>
            <Typography color='white' variant={isSmallScreen ? 'h5' : 'h3'} textAlign='center'>We offer a range of courses to suit all levels and styles of dance.</Typography>
          </Box>

          <Stack spacing={2}>
            <Link to="/schedule">
              <Button disableRipple sx={{ width: '200px', height: '50px' }} variant='contained'>Schedule</Button>
            </Link>
            <Link to="/courses">
              <Button disableRipple sx={{ width: '200px', height: '50px' }} variant='contained'>Courses</Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </PageContainer >
  );
}

export const Route = createFileRoute('/')({
  component: Index,
})