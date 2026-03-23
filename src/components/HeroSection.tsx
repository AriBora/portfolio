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

const HeroSection = () => {
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
                // Subtle radial glow behind content
                // '&::before': {
                //     content: '""',
                //     position: 'absolute',
                //     top: '-50%',
                //     left: '-20%',
                //     width: '60%',
                //     height: '200%',
                //     background: 'radial-gradient(ellipse, rgba(6, 182, 212, 0.04) 0%, transparent 70%)',
                //     pointerEvents: 'none',
                // },
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
                            border: '3px solid rgba(6, 182, 212, 0.3)',
                            boxShadow: '0 0 30px rgba(6, 182, 212, 0.15), 0 8px 32px rgba(0,0,0,0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                borderColor: 'rgba(6, 182, 212, 0.6)',
                                boxShadow: '0 0 40px rgba(6, 182, 212, 0.25), 0 8px 32px rgba(0,0,0,0.3)',
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
                            color: theme.palette.primary.main,
                            fontFamily: '"JetBrains Mono", monospace',
                            fontWeight: 500,
                            fontSize: { xs: '0.95rem', md: '1.1rem' },
                            mb: 2.5,
                            minHeight: '1.5em',
                        }}
                    >
                        {displayText}
                        <Box
                            component="span"
                            sx={{
                                display: 'inline-block',
                                width: 2,
                                height: '1.1em',
                                bgcolor: theme.palette.primary.main,
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
                            color: '#94a3b8',
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
                            <LocationOnIcon sx={{ fontSize: 16, color: '#64748b' }} />
                            <Typography
                                variant="body2"
                                sx={{ color: '#64748b', fontSize: '0.85rem' }}
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
                                '&:hover .email-text': { color: '#e2e8f0' },
                            }}
                        >
                            <EmailIcon sx={{ fontSize: 16, color: '#64748b' }} />
                            <Typography
                                className="email-text"
                                variant="body2"
                                sx={{
                                    color: '#64748b',
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

export default HeroSection;
