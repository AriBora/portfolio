import { Box, Typography, Stack } from '@mui/material';
import { Profile } from '../../data/data';
import LinkedIn from './contact/LinkedIn';
import GitHub from './contact/Github';
import Kaggle from './contact/Kaggle';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                // bgcolor: 'rgba(5, 5, 5, 0.6)',
                background: 'transparent',
                // backdropFilter: 'blur(10px)',
                borderTop: '1px solid rgba(250, 204, 21, 0.3)',
                mt: 'auto', // Pushes footer to the bottom of the flex container
                py: { xs: 3, md: 4 },
            }}
        >
            <Box
                sx={{
                    maxWidth: 1080,
                    width: '100%',
                    mx: 'auto',
                    px: { xs: 3, md: 5 },
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                }}
            >
                {/* Copyright / Built By */}
                <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#e2e8f0',
                            fontWeight: 600,
                            letterSpacing: '0.02em',
                        }}
                    >
                        {new Date().getFullYear()} {Profile.name}
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{ color: '#94a3b8', mt: 0.5, display: 'block' }}
                    >
                        Built with ❤️ using <span style={{ color: '#facc15' }}>Antigravity</span>.
                    </Typography>
                </Box>

                {/* Social Links */}
                <Stack direction="row" spacing={1}>
                    {Profile.linkedIn && <LinkedIn />}
                    {Profile.github && <GitHub />}
                    {Profile.kaggle && <Kaggle />}
                </Stack>
            </Box>
        </Box>
    );
};

export default Footer;
