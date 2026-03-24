import React, { useMemo } from 'react';
import { Box, keyframes } from '@mui/material';

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const StarBackground = () => {
    // Generate static random stars on mount to prevent re-renders moving them
    const stars = useMemo(() => {
        const starArray = [];
        const count = 200; // Total number of stars
        for (let i = 0; i < count; i++) {
            starArray.push({
                id: i,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                size: Math.random() * 2 + 1, // 1px to 3px
                delay: `${Math.random() * 5}s`,
                duration: `${3 + Math.random() * 4}s`,
            });
        }
        return starArray;
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1, // Behind everything
                bgcolor: '#000000',
                overflow: 'hidden',
                pointerEvents: 'none', // Allow clicking through to the page
            }}
        >
            {stars.map((star) => (
                <Box
                    key={star.id}
                    sx={{
                        position: 'absolute',
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        bgcolor: '#ffffff',
                        borderRadius: '50%',
                        opacity: 0.5,
                        animation: `${twinkle} ${star.duration} ease-in-out infinite`,
                        animationDelay: star.delay,
                        pointerEvents: 'auto', // Enable hover on individual stars
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'scale(4)',
                            opacity: 1,
                            boxShadow: '0 0 15px 2px #ffffff, 0 0 30px 5px rgba(255, 255, 255, 0.4)',
                            zIndex: 10,
                            bgcolor: '#facc15', // Subtle yellow glow to match theme
                        },
                    }}
                />
            ))}
        </Box>
    );
};

export default StarBackground;
