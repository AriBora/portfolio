import { Box, Chip, Typography } from "@mui/material";
import { Skills as SkillsData } from "../../../data/data";
import TerminalIcon from '@mui/icons-material/Terminal';

export default function SkillsPanel() {
    const categories = Object.entries(SkillsData);

    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(148, 163, 184, 0.08)',
                borderRadius: 3,
                p: { xs: 2.5, md: 3 },
                backdropFilter: 'blur(10px)',
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 3,
                    pb: 2,
                    borderBottom: '1px solid rgba(148, 163, 184, 0.08)',
                }}
            >
                <TerminalIcon
                    sx={{
                        fontSize: 20,
                        color: 'primary.main',
                    }}
                />
                <Typography
                    sx={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: '#e2e8f0',
                        letterSpacing: '0.02em',
                    }}
                >
                    Tech Stack
                </Typography>
            </Box>

            {/* Categorized Skills */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {categories.map(([category, skills]) => (
                    <Box key={category}>
                        <Typography
                            variant="caption"
                            sx={{
                                color: '#64748b',
                                fontWeight: 600,
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                mb: 1,
                                display: 'block',
                            }}
                        >
                            {category}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                            {skills.map((skill, index) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    size="small"
                                    sx={{
                                        background: index % 2 === 0 ? 'rgba(6, 182, 212, 0.04)' : 'rgba(59, 130, 246, 0.04)',
                                        border: index % 2 === 0 ? '1px solid rgba(6, 182, 212, 0.2)' : '1px solid rgba(59, 130, 246, 0.2)',
                                        color: index % 2 === 0 ? '#67e8f9' : '#93c5fd',
                                        fontWeight: 500,
                                        fontSize: '0.75rem',
                                        letterSpacing: '0.02em',
                                        height: 28,
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            background: index % 2 === 0 ? 'rgba(6, 182, 212, 0.12)' : 'rgba(59, 130, 246, 0.12)',
                                            borderColor: index % 2 === 0 ? '#06b6d4' : '#3b82f6',
                                            transform: 'translateY(-1px)',
                                            boxShadow: index % 2 === 0 ? '0 4px 12px rgba(6, 182, 212, 0.15)' : '0 4px 12px rgba(59, 130, 246, 0.15)',
                                        },
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}