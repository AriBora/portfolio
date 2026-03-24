import { Box, Chip, Typography } from "@mui/material";
import { Skills as SkillsData } from "../../../data/data";
import TerminalIcon from '@mui/icons-material/Terminal';

export default function SkillsPanel() {
    const categories = Object.entries(SkillsData);

    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: '#1a1a1a',
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
                        color: '#facc15',
                    }}
                />
                <Typography
                    sx={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: '#facc15',
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
                            {skills.map((skill) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    size="small"
                                    sx={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: '#94a3b8',
                                        fontWeight: 500,
                                        fontSize: '0.75rem',
                                        letterSpacing: '0.02em',
                                        height: 28,
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            background: 'rgba(250, 204, 21, 0.05)',
                                            borderColor: '#facc15',
                                            color: '#facc15',
                                            transform: 'translateY(-1px)',
                                            boxShadow: '0 4px 12px rgba(250, 204, 21, 0.1)',
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