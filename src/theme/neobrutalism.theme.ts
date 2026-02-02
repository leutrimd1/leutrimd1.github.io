import { createTheme } from '@mui/material/styles';

export const neobrutalistTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00FF94', // Electric lime
      contrastText: '#0A0A0A',
    },
    secondary: {
      main: '#FF6B35', // Orange
      contrastText: '#0A0A0A',
    },
    error: {
      main: '#FF006E', // Hot pink
      contrastText: '#0A0A0A',
    },
    warning: {
      main: '#FFD60A', // Bright yellow
      contrastText: '#0A0A0A',
    },
    background: {
      default: '#FFFEF2', // Off-white
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0A0A0A',
      secondary: '#0A0A0A',
    },
  },
  typography: {
    fontFamily: '"Arial Black", "Arial", "Helvetica", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 900,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
    },
    h4: {
      fontSize: '2.5rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em',
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.7,
      fontFamily: '"Arial", "Helvetica", sans-serif',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6,
      fontFamily: '"Arial", "Helvetica", sans-serif',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 600,
      fontFamily: '"Arial", "Helvetica", sans-serif',
    },
  },
  shape: {
    borderRadius: 0, // Kill all rounded corners
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 0, // Remove default shadows
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#FFFEF2',
          scrollBehavior: 'smooth',
        },
      },
    },
  },
});
