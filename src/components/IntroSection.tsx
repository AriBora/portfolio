import { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Avatar,
    Stack,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Profile, Title } from '../../data/data';
import LinkedIn from './contact/LinkedIn';
import GitHub from './contact/Github';
import Kaggle from './contact/Kaggle';
import SkillsPanel from './details/Skills';

const IntroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Typing animation for Title array
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = Title[titleIndex];
        const speed = isDeleting ? 30 : 60;

        if (!isDeleting && displayText === currentTitle) {
            // Pause at end of word
            const pause = setTimeout(() => setIsDeleting(true), 2000);
            return () => clearTimeout(pause);
        }

        if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % Title.length);
            return;
        }

        const timer = setTimeout(() => {
            setDisplayText(
                isDeleting
                    ? currentTitle.substring(0, displayText.length - 1)
                    : currentTitle.substring(0, displayText.length + 1)
            );
        }, speed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, titleIndex]);

    return (
        <Box
            id="about"
            sx={{
                px: { xs: 3, md: 5 },
                py: { xs: 4, md: 6 },
                background: 'transparent',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 4, md: 6 },
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* ─── Left Column: Identity ─── */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Avatar
                        src={Profile.avatarUrl}
                        alt={Profile.name}
                        sx={{
                            width: { xs: 96, md: 120 },
                            height: { xs: 96, md: 120 },
                            border: '2px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                borderColor: '#facc15',
                                boxShadow: '0 0 30px rgba(250, 204, 21, 0.2)',
                                transform: 'scale(1.05)',
                            },
                            mb: 2
                        }}
                    >
                        {Profile.name.charAt(0)}
                    </Avatar>

                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                            color: '#f8fafc',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1,
                        }}
                    >
                        {Profile.name}
                    </Typography>

                    {/* Typing Title */}
                    <Typography
                        sx={{
                            color: '#facc15',
                            fontFamily: '"JetBrains Mono", monospace',
                            fontWeight: 600,
                            fontSize: { xs: '0.95rem', md: '1.1rem' },
                            mb: 2.5,
                            minHeight: '1.5em',
                            letterSpacing: '0.05em',
                        }}
                    >
                        {displayText}
                        <Box
                            component="span"
                            sx={{
                                display: 'inline-block',
                                width: 2,
                                height: '1.1em',
                                bgcolor: '#facc15',
                                ml: 0.5,
                                verticalAlign: 'text-bottom',
                                animation: 'blink 1s step-end infinite',
                                '@keyframes blink': {
                                    '0%, 100%': { opacity: 1 },
                                    '50%': { opacity: 0 },
                                },
                            }}
                        />
                    </Typography>

                    {/* Bio */}
                    <Typography
                        sx={{
                            color: 'text.secondary',
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            lineHeight: 1.8,
                            mb: 3,
                            maxWidth: 520,
                        }}
                    >
                        {Profile.bio}
                    </Typography>

                    {/* Location + Email inline */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: { xs: 1.5, md: 3 },
                            mb: 3,
                            flexWrap: 'wrap',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                            <LocationOnIcon sx={{ fontSize: 16, color: '#94a3b8' }} />
                            <Typography
                                variant="body2"
                                sx={{ color: '#94a3b8', fontSize: '0.85rem' }}
                            >
                                {Profile.location}
                            </Typography>
                        </Box>
                        {!isMobile && (
                            <Typography sx={{ color: '#334155', fontSize: '0.8rem' }}>•</Typography>
                        )}
                        <Box
                            component="a"
                            href={`mailto:${Profile.email}`}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.75,
                                textDecoration: 'none',
                                transition: 'color 0.2s',
                                '&:hover .email-text': { color: '#e9f1fcff' },
                            }}
                        >
                            <EmailIcon sx={{ fontSize: 16, color: '#e4ebf6ff' }} />
                            <Typography
                                className="email-text"
                                variant="body2"
                                sx={{
                                    color: '#94a3b8',
                                    fontSize: '0.85rem',
                                    transition: 'color 0.2s',
                                }}
                            >
                                {Profile.email}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Social Links */}
                    <Stack direction="row" spacing={1}>
                        {Profile.linkedIn && <LinkedIn />}
                        {Profile.github && <GitHub />}
                        {Profile.kaggle && <Kaggle />}
                    </Stack>
                </Box>

                {/* ─── Right Column: Tech Stack ─── */}
                <Box
                    sx={{
                        width: { xs: '100%', md: 360 },
                        flexShrink: 0,
                        alignSelf: { md: 'flex-start' },
                    }}
                >
                    <SkillsPanel />
                </Box>
            </Box>
        </Box>
    );
};

export default IntroSection;
