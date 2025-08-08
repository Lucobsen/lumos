import { Box, Button, Grid, Link as MuiLink, List, ListItem, Stack, styled, Typography, useMediaQuery, useTheme } from '@mui/material'
import { createFileRoute, Link } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const StyledMuiLink = styled(MuiLink)`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.palette.secondary.main};
`;

type News = {
  title: string;
  content: string;
  internalLink?: {
    text: string;
    link: string;
  };
  externalLink?: {
    text: string;
    link: string;
  };
};

const news: News[] = [
  {
    title: 'home.news.tryOuts.title',
    content: 'home.news.tryOuts.content',
    externalLink: {
      text: 'home.news.tryOuts.link',
      link: 'https://www.bueno.nu/webshop/school/764/schedule?currentDate=01-09-2025&skipEmptyWeeksOnFirstLoad=NO'
    }
  },
  {
    title: 'home.news.location.title',
    content: 'home.news.location.content',
    internalLink: {
      text: 'home.news.location.link',
      link: '/locations'
    }
  }
];

const Index = () => {
  useEffect(() => { document.title = 'Lumos'; }, []);

  const { t } = useTranslation();
  const { breakpoints } = useTheme();
  const isSmallScreen = useMediaQuery(breakpoints.down('sm'));
  const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));

  return (
    <PageContainer customPadding={{ pt: 4, pr: isSmallScreen ? 4 : 0, pb: 4, pl: 4 }}>
      <Grid container columnSpacing={2} rowSpacing={isSmallScreen ? 4 : 0}>
        {!isSmallScreen &&
          <Stack pr={4}>
            <Stack spacing={2} p={2}>
              <Stack spacing={1}>
                <Typography
                  color='black'
                  variant='h5'
                  textAlign='center'
                  fontWeight='bold'>
                  {t('home.cover.lineOne')}
                </Typography>
                <Typography
                  color='black'
                  variant='h5'
                  textAlign='center'>
                  {t('home.cover.lineTwo')}
                </Typography>
              </Stack>
              <Typography
                color='black'
                variant='h5'
                textAlign='center'
                fontWeight='bold'>
                {t('home.cover.lineThree')}
              </Typography>
            </Stack>
          </Stack>}

        <Grid size={{ xl: 4, lg: 4, md: 4, sm: 6, xs: 12 }}>
          <Box
            sx={{
              borderRadius: 10,
              border: '4px solid #000',
              height: isSmallScreen ? '50vh' : '80vh',
              bgcolor: 'primary.light',
              overflow: 'hidden'
            }}
            boxShadow={({ shadows }) => shadows[8]}>
            <Typography
              sx={{
                background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
              }}
              color='black'
              variant={isSmallScreen ? 'h3' : 'h1'}
              textAlign='center'
              borderBottom='4px solid #000'>
              {t("home.news.header")}
            </Typography>

            <List sx={{ overflow: 'auto', height: `calc(100% - ${isSmallScreen ? 65 : 120}px)`, bgcolor: '#fff' }} >
              {news.map(({ title, internalLink, externalLink, content }) =>
                <ListItem divider sx={{ justifyContent: 'center' }}>
                  <Stack mb={2} spacing={isSmallScreen ? 1 : 2}>
                    <Typography
                      color='black'
                      variant={isSmallScreen ? 'h5' : 'h3'}
                      fontFamily='Chau Philomene One'
                      textAlign='center'>
                      {t(title)}
                    </Typography>
                    <Stack spacing={isSmallScreen ? 2 : 3} alignItems='center'>
                      <Typography variant='body1' color='black' textAlign='center'>{t(content)}</Typography>
                      {internalLink &&
                        <StyledMuiLink href={internalLink.link}>
                          <Button
                            disableRipple
                            sx={{
                              color: 'white',
                              minWidth: isSmallScreen ? '100px' : '200px',
                              height: isSmallScreen ? '40px' : '50px',
                              borderRadius: 10,
                              fontWeight: 'bold',
                              background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                            }}
                            variant='contained'>
                            {t(internalLink.text)}
                          </Button>
                        </StyledMuiLink>}
                      {externalLink &&
                        <StyledMuiLink target='_blank' href={externalLink.link}>
                          <Button
                            disableRipple
                            sx={{
                              color: 'white',
                              minWidth: isSmallScreen ? '100px' : '200px',
                              height: isSmallScreen ? '40px' : '50px',
                              borderRadius: 10,
                              fontWeight: 'bold',
                              background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                            }}
                            variant='contained'>
                            {t(externalLink.text)}
                          </Button>
                        </StyledMuiLink>}
                    </Stack>
                  </Stack>
                </ListItem>)}
            </List>
          </Box>
        </Grid>

        <Grid
          size={{ xl: 8, lg: 8, md: 8, sm: 6, xs: 12 }}
          px={4}
          sx={{
            backgroundImage: isSmallScreen ? 'none' : 'url(salsa-2.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundBlendMode: 'hard-light',
            backgroundSize: 'cover',
            boxShadow: '10px 0 8px -2px white inset'
          }}>
          <Stack
            spacing={2}
            alignItems='center'
            justifyContent='center'
            height={isSmallScreen ? 'unset' : '80vh'}>
            <Link to="/schedule">
              <Button
                disableRipple
                sx={{
                  mt: isExtraSmallScreen ? 0 : 12,
                  color: 'white',
                  width: isSmallScreen ? '200px' : '300px',
                  height: isSmallScreen ? '50px' : '60px',
                  borderRadius: 10,
                  fontWeight: 'bold',
                  background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                }}
                variant='contained'>
                {t("navItems.schedule")}
              </Button>
            </Link>
            <Link to="/prices">
              <Button
                disableRipple
                sx={{
                  color: 'white',
                  width: isSmallScreen ? '200px' : '300px',
                  height: isSmallScreen ? '50px' : '60px',
                  borderRadius: 10,
                  fontWeight: 'bold',
                  background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                }}
                variant='contained'>
                {t("navItems.prices")}
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </PageContainer >
  );
}

export const Route = createFileRoute('/')({
  component: Index,
})