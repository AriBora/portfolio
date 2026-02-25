import { useState } from 'react';
import { Box, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Navbar from './NavBar';
import Sidebar from './SideBar';
import MainContent from './MainContent';
import { Profile } from '../../data/data';

const PortfolioLayout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [sidebarExpanded, setSidebarExpanded] = useState(true);

    const profileData = Profile;

    const handleSidebarToggle = () => {
        setSidebarExpanded(!sidebarExpanded);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Toolbar />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    flexGrow: 1,
                    background: 'linear-gradient(180deg, #0a0a1a 0%, #0f0f2e 100%)',
                }}
            >
                {/* Sidebar - Mobile on top (full width), Desktop on left (collapsible) */}
                <Sidebar
                    {...profileData}
                    isExpanded={isMobile ? true : sidebarExpanded}
                    onToggle={isMobile ? () => { } : handleSidebarToggle}
                />

                <MainContent />
            </Box>
        </Box>
    );
};

export default PortfolioLayout;
