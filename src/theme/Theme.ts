import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#818cf8',
            light: '#a5b4fc',
            dark: '#6366f1',
            contrastText: '#0f0f23',
        },
        secondary: {
            main: '#f472b6',
            light: '#f9a8d4',
            dark: '#ec4899',
            contrastText: '#0f0f23',
        },
        background: {
            default: '#0a0a1a',
            paper: '#12122a',
        },
        text: {
            primary: '#e2e8f0',
            secondary: '#94a3b8',
        },
        divider: 'rgba(129, 140, 248, 0.1)',
        success: {
            main: '#34d399',
            light: '#6ee7b7',
        },
        warning: {
            main: '#fbbf24',
        },
        info: {
            main: '#38bdf8',
        },
    },
    typography: {
        fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        h4: {
            fontWeight: 800,
            letterSpacing: '-0.03em',
        },
        h5: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
        },
        h6: {
            fontWeight: 600,
            letterSpacing: '-0.01em',
        },
        body1: {
            lineHeight: 1.7,
        },
        body2: {
            lineHeight: 1.6,
            color: '#94a3b8',
        },
    },
    shape: {
        borderRadius: 16,
    },
    shadows: [
        'none',
        '0 1px 2px 0 rgb(0 0 0 / 0.2)',
        '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
        '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2)',
        '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.2)',
        '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.2)',
        '0 25px 50px -12px rgb(0 0 0 / 0.5)',
        ...Array(18).fill('none'),
    ] as any,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: 12,
                    padding: '12px 24px',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                },
                contained: {
                    boxShadow: '0 4px 14px 0 rgba(129, 140, 248, 0.3)',
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    '&:hover': {
                        boxShadow: '0 6px 20px 0 rgba(129, 140, 248, 0.45)',
                        transform: 'translateY(-1px)',
                        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(129, 140, 248, 0.08)',
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(17, 17, 43, 0.8)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    minHeight: 56,
                    transition: 'all 0.2s ease',
                    color: '#94a3b8',
                    '&.Mui-selected': {
                        color: '#a5b4fc',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    height: 3,
                    borderRadius: 3,
                    background: 'linear-gradient(90deg, #818cf8 0%, #f472b6 100%)',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: 8,
                },
            },
        },
    },
});

export default theme;
