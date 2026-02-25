import { AppBar, Toolbar, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import Resume from './details/Resume';
import GitHub from './contact/Github';
import LinkedIn from './contact/LinkedIn';
import { Profile } from '../data/data';
import Kaggle from './contact/Kaggle';

// interface NavbarProps {
//     onMobileMenuToggle?: () => void;
// }

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                bgcolor: 'rgba(10, 10, 26, 0.85)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid',
                borderColor: 'rgba(129, 140, 248, 0.1)',
                zIndex: theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
                <Box sx={{
                    display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'space-between',
                    width: '100%',
                }}>
                    {/* {isMobile && (
                        <IconButton
                            edge="start"
                            aria-label="menu"
                            onClick={onMobileMenuToggle}
                            sx={{
                                color: 'primary.main',
                                '&:hover': {
                                    bgcolor: 'rgba(129, 140, 248, 0.1)',
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )} */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: "Roboto",
                                fontWeight: 800,
                                background: 'linear-gradient(135deg, #a5b4fc 0%, #f9a8d4 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            {Profile.name.split(' ')[0]}'s Portfolio
                        </Typography>
                    </Box>

                    {isMobile ?
                        <Resume /> : <></>
                    }
                </Box>

                {!isMobile &&
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        {Profile.linkedIn && <LinkedIn />}
                        {Profile.github && <GitHub />}
                        {Profile.kaggle && <Kaggle />}
                        <Resume />
                    </Box>
                }

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
