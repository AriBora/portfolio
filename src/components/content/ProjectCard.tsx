import { useState } from "react";
import { Button, Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

interface ProjectCardProps {
    title: string;
    date: string;
    description: string[];
    tags: string[];
    link?: string;
    index: number;
}

const ProjectCard = ({ title, date, description, tags, index, link }: ProjectCardProps) => {
    const [expanded, setExpanded] = useState(false);
    const visibleItems = expanded ? description : description.slice(0, 2);
    return (
        <Card
            sx={{
                mb: 2.5,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: 'scaleIn 0.5s ease forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                '@keyframes scaleIn': {
                    from: { opacity: 0, transform: 'scale(0.95)' },
                    to: { opacity: 1, transform: 'scale(1)' },
                },
                '&:hover': {
                    boxShadow: '0 24px 48px -12px rgba(6, 182, 212, 0.3)',
                    transform: 'translateY(-6px) scale(1.01)',
                },
            }}
        >
            <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.15rem', color: 'text.primary' }}>
                            {title}
                        </Typography>
                        <Box
                            component='a'
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ArrowOutwardIcon
                                className="project-arrow"
                                sx={{
                                    color: '#ffffff',
                                    fontSize: 20,
                                    opacity: 0.7,
                                    transition: 'all 0.3s ease',
                                    transform: 'translateY(3px)',
                                    '&:hover': {
                                        transform: 'translate(4px, -4px)',
                                        opacity: 1,
                                    }
                                }}
                            />
                        </Box>
                    </Box>

                    <Chip
                        label={date}
                        size="small"
                        sx={{
                            background: 'rgba(129, 140, 248, 0.12)',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            color: '#a5b4fc',
                            border: '1px solid rgba(129, 140, 248, 0.2)',
                        }}
                    />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 2.5 }}>
                    <Box component="ul" sx={{ pl: 2, mt: 0, mb: 0 }}>
                        {visibleItems.map((item, i) => (
                            <Box component="li" key={i} sx={{ mb: 0.5 }}>
                                {item}
                            </Box>
                        ))}
                    </Box>
                    {description.length > 2 && (
                        <Box sx={{ mt: 1 }}>
                            <Button
                                size="small"
                                onClick={() => setExpanded((s) => !s)}
                                sx={{ textTransform: 'none', p: 0 }}
                            >
                                {expanded ? 'Show less' : `Show ${description.length - 2} more`}
                            </Button>
                        </Box>
                    )}
                </Typography>
                <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                    {tags.map((tag, index) => (
                        <Chip
                            key={tag}
                            label={tag}
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
                </Stack>
            </CardContent>
        </Card>
    )
}
export default ProjectCard;