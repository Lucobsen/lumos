
import { Button, Toolbar, ThemeProvider, Box, AppBar, createTheme, Typography } from '@mui/material';


export const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffdb6e',
        light: '#FFE28B',
        dark: '#B2994D',
      },
      secondary: {
        main: '#385097',
        light: '#5F73AB',
        dark: '#273869',
      },
    },
    typography: {
      fontFamily: [
        'Chau Philomene One',
        'Montserrat Classic'
      ].join(','),
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button variant='text' color='secondary' sx={{ fontSize: '2rem', padding: 0, backgroundColor: 'transparent' }} disableRipple >
              LUMOS
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider >
  );
}

export default App
