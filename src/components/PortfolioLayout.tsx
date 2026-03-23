import { Box } from '@mui/material';
import Navbar from './NavBar';
import HeroSection from './HeroSection';
import MainContent from './MainContent';
import Footer from './Footer';
import { useScrollSpy } from '../hooks/useScrollSpy';

const PortfolioLayout = () => {
    // Track the currently visible section based on scroll position
    const activeSection = useScrollSpy(['about', 'experience', 'education', 'projects', 'achievements']);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'transparent',
            }}
        >
            <Navbar activeSection={activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} />
            
            {/* Centered Content Wrapper */}
            <Box
                sx={{
                    maxWidth: 1080,
                    width: '100%',
                    mx: 'auto',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <HeroSection />
                <MainContent />
            </Box>

            <Footer />
        </Box>
    );
};

export default PortfolioLayout;
