import { Box, Button, Grid, List, ListItem, Stack, Typography, useMediaQuery, useTheme, Link as MuiLink } from '@mui/material'
import { createFileRoute, Link } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { useEffect } from 'react';

type News = {
  title: string;
  content: string;
  link: string;
};

const news: News[] = [
  {
    title: 'New Teacher',
    content: 'We at Lumos have just announced one of our amazing teachers! Check out the following post on our socials for more information!',
    link: 'https://www.instagram.com/reel/DMX3WEQMj60/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=='
  },
  {
    title: 'New Location',
    content: 'We at Lumos have just announced one of our glorious location! Check out the following post on our socials for more information!',
    link: 'https://www.instagram.com/reel/DMX3WEQMj60/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=='
  }
];

const Index = () => {
  useEffect(() => { document.title = 'Lumos'; }, []);

  const { breakpoints } = useTheme();
  const isSmallScreen = useMediaQuery(breakpoints.down(900));

  return (
    <PageContainer disableBorders>
      <Box>
        <Box
          component="img"
          sx={{
            width: '100vw',
            height: '100vh',
            position: 'absolute',
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
          src="salsa-2.jpg"
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: isSmallScreen ? 6 : 10,
          p: isSmallScreen ? 2 : 4,
        }}>
          <Grid container columnSpacing={2} rowSpacing={4}>
            <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }} >
              <Box sx={{ borderRadius: 2, border: '1px solid #000', height: isSmallScreen ? '50vh' : '80vh', bgcolor: 'primary.light', overflow: 'hidden' }}>
                <Typography
                  sx={{
                    WebkitTextStrokeWidth: 1,
                    WebkitTextStrokeColor: '#000'
                  }}
                  color='white'
                  variant={isSmallScreen ? 'h3' : 'h1'}
                  textAlign='center'
                  borderBottom='1px solid #000'>
                  News
                </Typography>
                <List sx={{ overflow: 'auto', height: '100%', bgcolor: '#fff' }} >
                  {news.map(({ title, link, content }) =>
                    <ListItem divider >
                      <MuiLink underline='none' target='_blank' href={link}>
                        <Stack alignItems='center' mb={2}>
                          <Typography
                            sx={{
                              WebkitTextStrokeWidth: isSmallScreen ? 0.2 : 0.5,
                              WebkitTextStrokeColor: '#000'
                            }}
                            color='inherit'
                            variant={isSmallScreen ? 'h5' : 'h3'}>
                            {title}
                          </Typography>
                          <Typography variant='body2' color='secondary' textAlign='center'>{content}</Typography>
                        </Stack>
                      </MuiLink>
                    </ListItem>)}
                </List>
              </Box>
            </Grid>

            <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
              <Stack spacing={2} alignItems='center' justifyContent='center' height={isSmallScreen ? 'unset' : '80vh'}>
                {!isSmallScreen && <>
                  <Typography
                    sx={{
                      WebkitTextStrokeWidth: 1,
                      WebkitTextStrokeColor: '#000'
                    }}
                    color='primary'
                    variant={isSmallScreen ? 'h5' : 'h3'}
                    textAlign='center'>
                    At Lumos we can show you the moves and give you the confidence to shine on every dancefloor, everywhere!
                  </Typography>
                  <Typography
                    sx={{
                      WebkitTextStrokeWidth: 1,
                      WebkitTextStrokeColor: '#000'
                    }}
                    color='primary'
                    variant={isSmallScreen ? 'h5' : 'h3'}
                    textAlign='center'>
                    We offer a range of courses to suit all levels and styles of dance.
                  </Typography>
                </>}

                <Stack spacing={2}>
                  <Link to="/schedule">
                    <Button
                      disableRipple
                      sx={{
                        width: '200px',
                        height: '50px'
                      }} variant='contained'>Schedule</Button>
                  </Link>
                  <Link to="/courses">
                    <Button disableRipple sx={{ width: '200px', height: '50px' }} variant='contained'>Courses</Button>
                  </Link>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </PageContainer >
  );
}

export const Route = createFileRoute('/')({
  component: Index,
})