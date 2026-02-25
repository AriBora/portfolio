import { Box, Chip, Typography } from "@mui/material";
import { Profile } from "../../../data/data";

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
                            background: 'rgba(6, 182, 212, 0.05)', // Very subtle Cyan tint
                            border: index % 2 === 0
                                ? '1px solid rgba(6, 182, 212, 0.3)' // Cyan border
                                : '1px solid rgba(99, 102, 241, 0.3)', // Indigo border
                            color: index % 2 === 0 ? '#67e8f9' : '#a5b4fc', // Lightened text colors
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            '&:hover': {
                                background: index % 2 === 0 ? '#06b5d477' : '#6365f161',
                                borderColor: index % 2 === 0 ? '#06b6d4' : '#6366f1',
                                transform: 'translateY(-2px)', // Lift effect instead of scale
                            },
                        }}
                    />
                ))}
            </Box>
        </Box>
    )
}