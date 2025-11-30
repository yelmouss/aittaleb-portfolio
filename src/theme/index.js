import { createTheme } from '@mui/material/styles';

const brandPrimary = '#4f46e5';
const brandAccent = '#a855f7';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brandPrimary,
      light: '#7367f0',
      dark: '#312e81',
    },
    secondary: {
      main: brandAccent,
      light: '#c084fc',
      dark: '#7c3aed',
    },
    background: {
      default: '#f5f6fb',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
    divider: '#e2e8f0',
  },
  typography: {
    fontFamily: 'var(--font-geist-sans, "Inter", sans-serif)',
    h1: {
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.15,
    },
    h3: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
      letterSpacing: 0.2,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: 0.3,
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0px 2px 12px rgba(15, 23, 42, 0.05)',
    '0px 4px 18px rgba(15, 23, 42, 0.08)',
    '0px 6px 20px rgba(15, 23, 42, 0.1)',
    '0px 8px 24px rgba(15, 23, 42, 0.12)',
    ...Array(20).fill('0px 10px 28px rgba(15, 23, 42, 0.12)'),
  ],
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 20,
          paddingBlock: 10,
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${brandPrimary} 0%, ${brandAccent} 100%)`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: '1px solid rgba(79, 70, 229, 0.08)',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 4,
          borderRadius: 999,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '0.95rem',
        },
      },
    },
  },
});

export default theme;
