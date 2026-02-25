import { Box, Chip, Typography } from "@mui/material";
import { Profile } from "../../data/data";

export default function Skills() {
    return (
        <Box sx={{ width: '100%' }}>
            <Typography
                variant="subtitle2"
                sx={{
                    mb: 2, fontWeight: 700, color: '#e2e8f0',
                    display: 'flex', alignItems: 'center', gap: 1,
                    '&::before': {
                        content: '""', width: 4, height: 16, borderRadius: 2,
                        background: 'linear-gradient(180deg, #818cf8 0%, #f472b6 100%)',
                    },
                }}
            >
                Skills & Technologies
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {Profile.skills.map((skill, index) => (
                    <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                            background: index % 2 === 0
                                ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                                : 'linear-gradient(135deg, #ec4899 0%, #f472b5cd 100%)',
                            color: 'white',
                            fontWeight: 500,
                            fontSize: '0.75rem',
                            transition: 'all 0.2s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 4px 12px -2px rgba(129, 140, 248, 0.4)',
                            },
                        }}
                    />
                ))}
            </Box>
        </Box>
    )
}