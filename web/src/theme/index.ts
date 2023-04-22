import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7743DB',
    },
    secondary: {
      main: '#3D3C42',
    },
    background: {
      default: '#F5F5F5',
    },
  },
  typography: {
    h3: {
      fontFamily: ['"Montserrat"', 'Open Sans'].join(','),
    },
    fontFamily: ['"Roboto"', 'sans-serif'].join(','),
  },
});

export { theme };
