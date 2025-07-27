import { Box, Button, Grid, List, ListItem, Stack, styled, Typography, useMediaQuery, useTheme } from '@mui/material'
import { createFileRoute, Link } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { useEffect } from 'react';

const StyledLink = styled(Link)`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.palette.secondary.main};
`;

type News = {
  title: string;
  content: string;
  linkText?: string;
  link?: string;
};

const news: News[] = [
  {
    title: 'Courses starting in September!',
    content: 'Join our Try-Outs on September 1st, 2nd and 3rd at two beautiful locations! Sign up easily for the level of your choice and try something new.',
  },
  {
    title: 'Excited to reveal our locations!',
    content: 'We got you covered in Amsterdam East and West with lovely and spacious dance rooms.',
    linkText: 'Join us wherever suits you best.',
    link: '/locations'
  }
];

const Index = () => {
  useEffect(() => { document.title = 'Lumos'; }, []);

  const { breakpoints } = useTheme();
  const isSmallScreen = useMediaQuery(breakpoints.down(900));

  return (
    <PageContainer>
      <Grid container columnSpacing={2} rowSpacing={6}>
        <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }} >
          <Box sx={{ borderRadius: 10, border: '4px solid #000', height: isSmallScreen ? '50vh' : '80vh', bgcolor: 'primary.light', overflow: 'hidden' }}>
            <Typography
              sx={{
                background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
              }}
              color='black'
              variant={isSmallScreen ? 'h3' : 'h1'}
              textAlign='center'
              borderBottom='4px solid #000'
              fontFamily='Chau Philomene One'>
              News
            </Typography>
            <List sx={{ overflow: 'auto', height: `calc(100% - ${isSmallScreen ? 65 : 120}px)`, bgcolor: '#fff' }} >
              {news.map(({ title, link, content, linkText }) =>
                <ListItem divider sx={{ justifyContent: 'center' }}>
                  <Stack mb={2}>
                    <Typography
                      color='black'
                      variant={isSmallScreen ? 'h5' : 'h3'}
                      fontFamily='Chau Philomene One'
                      textAlign='center'>
                      {title}
                    </Typography>
                    <Typography variant='body1' color='black' textAlign='center'>{content}</Typography>
                    {link && linkText &&
                      <StyledLink to={link}>
                        <Typography
                          variant='body1'
                          color='secondary'
                          textAlign='center'>
                          {linkText}
                        </Typography>
                      </StyledLink>
                    }
                  </Stack>
                </ListItem>)}
            </List>
          </Box>
        </Grid>

        <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Stack spacing={2} alignItems='center' justifyContent='center' height={isSmallScreen ? 'unset' : '80vh'}>
            {!isSmallScreen && <>
              <Typography
                color='secondary'
                variant={isSmallScreen ? 'h5' : 'h3'}
                textAlign='center'
                sx={{ textShadow: '0px 1px 1px #000' }}>
                At Lumos we can show you the moves and give you the confidence to shine on every dancefloor, everywhere!
              </Typography>
              <Typography
                color='secondary'
                variant={isSmallScreen ? 'h5' : 'h3'}
                textAlign='center'
                sx={{ textShadow: '0px 1px 1px #000' }}>
                We offer a range of courses to suit all levels and styles of dance.
              </Typography>
            </>}

            <Stack spacing={2}>
              <Link to="/schedule">
                <Button
                  disableRipple
                  sx={{
                    width: '200px',
                    height: '50px',
                    background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                  }}
                  variant='contained'>
                  Schedule
                </Button>
              </Link>
              <Link to="/courses">
                <Button

                  disableRipple
                  sx={{
                    width: '200px',
                    height: '50px',
                    background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                  }}
                  variant='contained'>
                  Courses
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </PageContainer >
  );
}

export const Route = createFileRoute('/')({
  component: Index,
})