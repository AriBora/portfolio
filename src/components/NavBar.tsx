import { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { Profile } from '../../data/data';

const navItems = ['About', 'Experience', 'Education', 'Projects', 'Achievements'];

interface NavbarProps {
    activeSection?: string;
    onNavigate?: (section: string) => void;
}

const Navbar = ({ activeSection = 'Experience', onNavigate }: NavbarProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        // Run once on load
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (item: string) => {
        const sectionId = item.toLowerCase();
        const element = document.getElementById(sectionId);

        if (element) {
            // Calculate position with offset for fixed header
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        onNavigate?.(item);
        setDrawerOpen(false);
    };

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    background: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(250, 204, 21, 0.3)' : '1px solid transparent',
                    boxShadow: scrolled ? '0 10px 30px -10px rgba(250, 204, 21, 0.15)' : 'none',
                    transition: 'all 0.3s ease',
                    zIndex: theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        maxWidth: 1080,
                        width: '100%',
                        mx: 'auto',
                        justifyContent: 'space-between',
                        px: { xs: 2, md: 3 },
                        minHeight: { xs: 56, md: 64 },
                    }}
                >
                    {/* Logo / Brand */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            cursor: 'pointer',
                            userSelect: 'none',
                        }}
                        onClick={() => handleNavClick('About')}
                    >
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                color: "#facc15",
                                letterSpacing: '-0.02em',
                            }}
                        >
                            {'>'}_
                        </Typography>
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                color: '#f8fafc',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            {Profile.name.split(' ')[0].toLowerCase()}
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
                        {/* Desktop Nav Links */}
                        {!isMobile && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                {navItems.map((item) => {
                                    const isActive = activeSection === item;
                                    return (
                                        <Button
                                            key={item}
                                            onClick={() => handleNavClick(item)}
                                            sx={{
                                                color: isActive ? '#facc15' : '#94a3b8',
                                                fontSize: '0.875rem',
                                                fontWeight: 500,
                                                textTransform: 'none',
                                                letterSpacing: '0.01em',
                                                px: 2,
                                                py: 0.75,
                                                borderRadius: 2,
                                                position: 'relative',
                                                bgcolor: isActive
                                                    ? 'rgba(250, 204, 21, 0.08)'
                                                    : 'transparent',
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    color: '#f8fafc',
                                                    bgcolor: 'rgba(148, 163, 184, 0.08)',
                                                },
                                            }}
                                        >
                                            {item}
                                        </Button>
                                    );
                                })}
                            </Box>
                        )}

                        {/* Resume Button + Mobile Hamburger */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Button
                                variant="contained"
                                startIcon={<DownloadIcon sx={{ fontSize: '1rem !important' }} />}
                                href={Profile.resumeUrl}
                                sx={{
                                    color: '#000000',
                                    bgcolor: '#facc15',
                                    borderColor: '#facc15',
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    letterSpacing: '0.02em',
                                    px: 2,
                                    py: 0.6,
                                    borderRadius: 1,
                                    transition: 'all 0.25s ease',
                                    '&:hover': {
                                        bgcolor: '#eab308',
                                        boxShadow: '0 0 20px rgba(250, 204, 21, 0.2)',
                                        transform: 'translateY(-1px)',
                                    },
                                }}
                            >
                                Resume
                            </Button>

                            {isMobile && (
                                <IconButton
                                    onClick={() => setDrawerOpen(true)}
                                    sx={{
                                        color: '#94a3b8',
                                        '&:hover': {
                                            color: '#f8fafc',
                                            bgcolor: 'rgba(148, 163, 184, 0.08)',
                                        },
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            )}
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        width: 280,
                        bgcolor: '#050505',
                        backgroundImage: 'none',
                    },
                }}
            >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton
                        onClick={() => setDrawerOpen(false)}
                        sx={{ color: '#94a3b8' }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List sx={{ px: 2 }}>
                    {navItems.map((item) => {
                        const isActive = activeSection === item;
                        return (
                            <ListItemButton
                                key={item}
                                onClick={() => handleNavClick(item)}
                                sx={{
                                    borderRadius: 2,
                                    mb: 0.5,
                                    bgcolor: isActive
                                        ? 'rgba(250, 204, 21, 0.08)'
                                        : 'transparent',
                                    '&:hover': {
                                        bgcolor: 'rgba(148, 163, 184, 0.06)',
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={item}
                                    primaryTypographyProps={{
                                        sx: {
                                            color: isActive
                                                ? '#facc15'
                                                : '#94a3b8',
                                            fontWeight: isActive ? 600 : 400,
                                            fontSize: '0.95rem',
                                        },
                                    }}
                                />
                            </ListItemButton>
                        );
                    })}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
