import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a9396',
      dark: '#0f4c5c',  
    },
    secondary: {
      main: '#f6aa1c',
      dark: '#db7c26',
    },
    error: {
        main: '#9a031e',
    },
    warning: {
        main: '#e2711d',
    },
    info: {
        main: '#94d2bd',
    },
    success: {
        main: '#6a994e',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

