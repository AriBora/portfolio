import { useState } from 'react';
import { Box, Toolbar, Drawer, useMediaQuery, useTheme } from '@mui/material';
import Navbar from './NavBar';
import Sidebar from './SideBar';
import MainContent from './MainContent';
import { Profile } from '../data/data';

const PortfolioLayout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [sidebarExpanded, setSidebarExpanded] = useState(true);
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const profileData = Profile;

    const handleSidebarToggle = () => {
        setSidebarExpanded(!sidebarExpanded);
    };

    const handleMobileDrawerToggle = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar onMobileMenuToggle={handleMobileDrawerToggle} />
            <Toolbar />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    flexGrow: 1,
                    background: 'linear-gradient(180deg, #0a0a1a 0%, #0f0f2e 100%)',
                }}
            >
                {/* Mobile Drawer */}
                {isMobile && (
                    <Drawer
                        anchor="left"
                        open={mobileDrawerOpen}
                        onClose={handleMobileDrawerToggle}
                        sx={{
                            '& .MuiDrawer-paper': {
                                width: 320,
                                pt: 8,
                            },
                        }}
                    >
                        <Sidebar
                            {...profileData}
                            isExpanded={true}
                            onToggle={handleMobileDrawerToggle}
                        />
                    </Drawer>
                )}

                {/* Desktop Sidebar */}
                {!isMobile && (
                    <Sidebar
                        {...profileData}
                        isExpanded={sidebarExpanded}
                        onToggle={handleSidebarToggle}
                    />
                )}

                <MainContent />
            </Box>
        </Box>
    );
};

export default PortfolioLayout;
