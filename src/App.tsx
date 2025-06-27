
import { Button, Toolbar, ThemeProvider, Box, AppBar, createTheme } from '@mui/material';


export const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffdb6e',
      },
      secondary: {
        main: '#385097',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button variant='text' color='secondary'>
              LUMOS
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default App
