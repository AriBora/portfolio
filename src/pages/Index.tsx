import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme/Theme';
import PortfolioLayout from '../components/PortfolioLayout';

const Index = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <PortfolioLayout />
        </ThemeProvider>
    );
};

export default Index;
