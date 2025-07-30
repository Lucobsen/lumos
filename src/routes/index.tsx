import { Box, Button, Grid, List, ListItem, Stack, styled, Typography, useMediaQuery, useTheme } from '@mui/material'
import { createFileRoute, Link } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
    title: 'Try-Outs starting in September!',
    content: 'Join our Try-Outs on September 1st, 2nd and 3rd at two beautiful locations! Sign up easily for the level of your choice and try something new.',
    linkText: 'Sign up here!',
    link: '/prices'
  },
  {
    title: 'Excited to reveal our locations!',
    content: 'We got you covered in Amsterdam East and West with lovely and spacious dance rooms.',
    linkText: 'Join us!',
    link: '/locations'
  }
];

const Index = () => {
  useEffect(() => { document.title = 'Lumos'; }, []);


  const { t } = useTranslation();
  const { breakpoints } = useTheme();
  const isSmallScreen = useMediaQuery(breakpoints.down(900));

  return (
    <PageContainer>
      <Grid container columnSpacing={2} rowSpacing={6}>
        <Grid size={{ xl: 4, lg: 4, md: 4, sm: 12, xs: 12 }}>
          <Box
            sx={{ borderRadius: 10, border: '4px solid #000', height: isSmallScreen ? '50vh' : '80vh', bgcolor: 'primary.light', overflow: 'hidden' }}
            boxShadow={({ shadows }) => shadows[8]}>
            <Typography
              sx={{
                background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
              }}
              color='black'
              variant={isSmallScreen ? 'h3' : 'h1'}
              textAlign='center'
              borderBottom='4px solid #000'>
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
                    <Stack spacing={1} alignItems='center'>
                      <Typography variant='body1' color='black' textAlign='center'>{content}</Typography>
                      {link && linkText &&
                        <StyledLink to={link}>
                          <Button
                            disableRipple
                            sx={{
                              color: 'white',
                              minWidth: '200px',
                              height: '50px',
                              borderRadius: 10,
                              fontWeight: 'bold',
                              background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                            }}
                            variant='contained'>
                            {linkText}
                          </Button>
                        </StyledLink>
                      }
                    </Stack>
                  </Stack>
                </ListItem>)}
            </List>
          </Box>
        </Grid>

        <Grid size={{ xl: 8, lg: 8, md: 8, sm: 12, xs: 12 }}>
          <Stack spacing={2} alignItems='center' justifyContent='center' height={isSmallScreen ? 'unset' : '80vh'}>
            {!isSmallScreen && <>
              <Typography
                color='black'
                variant={isSmallScreen ? 'h5' : 'h3'}
                textAlign='center'>
                At Lumos we can show you the moves and give you the confidence to shine on every dancefloor, everywhere!
              </Typography>
              <Typography
                color='black'
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
                    color: 'white',
                    width: '200px',
                    height: '50px',
                    borderRadius: 10,
                    fontWeight: 'bold',
                    background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                  }}
                  variant='contained'>
                  {t("navItems.schedule")}
                </Button>
              </Link>
              <Link to="/courses">
                <Button
                  disableRipple
                  sx={{
                    color: 'white',
                    width: '200px',
                    height: '50px',
                    borderRadius: 10,
                    fontWeight: 'bold',
                    background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                  }}
                  variant='contained'>
                  {t("navItems.courses")}
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