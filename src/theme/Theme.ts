import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#06b6d4', // Electric Cyan
            light: '#67e8f9',
            dark: '#0891b2',
            contrastText: '#020617',
        },
        secondary: {
            main: '#6366f1', // Indigo (used sparingly as an accent)
            light: '#a5b4fc',
            dark: '#4338ca',
        },
        background: {
            default: '#020617', // Deep Obsidian
            paper: '#0f172a',    // Slate Navy
        },
        text: {
            primary: '#f8fafc',
            secondary: '#94a3b8',
        },
        divider: 'rgba(148, 163, 184, 0.1)',
    },
    typography: {
        fontFamily: '"JetBrains Mono", "Fira Code", "Inter", sans-serif',
        h4: { fontWeight: 700, letterSpacing: '-0.01em' },
        h5: { fontWeight: 600, letterSpacing: '0.01em' },
        body1: { lineHeight: 1.8 },
    },
    shape: {
        borderRadius: 8, // Shaper corners feel less "bubbly" and more professional
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'uppercase', // Professional/Technical feel
                    letterSpacing: '0.05em',
                    fontWeight: 700,
                    borderRadius: 4,
                    padding: '10px 20px',
                },
                contained: {
                    background: '#06b6d4',
                    boxShadow: 'none',
                    '&:hover': {
                        background: '#0891b2',
                        boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)',
                        transform: 'none',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0f172a',
                    border: '1px solid #1e293b',
                    backgroundImage: 'none',
                    '&:hover': {
                        borderColor: '#334155',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    height: 2,
                    background: '#06b6d4', // Solid color is often classier than gradients
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    '&.navbarText': {
                        fontFamily: "JetBrains Mono",
                        fontWeight: 800,
                        color: '#f8fafc',
                        background: 'linear-gradient(to bottom, #ffffffe1 0%, #c3cfdf 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    },
                    '&.sectionHeading': {
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: '#06b6d4',
                        background: 'none',
                        WebkitTextFillColor: 'initial',
                    },
                },
            },
        }
    },
});

export default theme;