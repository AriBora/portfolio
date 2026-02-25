import { useState } from 'react';
import { Box, Button, Card, CardContent, Chip, Stack, Typography } from "@mui/material";

interface TimelineItemProps {
    title: string;
    subtitle: string;
    date: string;
    grade?: string;
    description: string[];
    tags?: string[];
    index: number;
}

const TimelineItem = ({ title, subtitle, date, grade, description, tags, index }: TimelineItemProps) => {
    const [expanded, setExpanded] = useState(false);
    const visibleItems = expanded ? description : description.slice(0, 2);

    return (
        <Card
            sx={{
                mb: 2.5,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'visible',
                animation: 'slideIn 0.5s ease forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                '@keyframes slideIn': {
                    from: { opacity: 0, transform: 'translateX(-20px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                '&:hover': {
                    boxShadow: '0 20px 40px -12px rgba(99, 102, 241, 0.3)',
                    transform: 'translateY(-4px)',
                    borderColor: 'rgba(129, 140, 248, 0.3)',
                },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: -20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #818cf8 0%, #f472b6 100%)',
                    boxShadow: '0 0 0 4px rgba(129, 140, 248, 0.2)',
                    display: { xs: 'none', md: 'block' },
                },
            }}
        >
            <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem', color: 'text.primary' }}>
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 600,
                                background: 'linear-gradient(135deg, #a5b4fc 0%, #c4b5fd 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {subtitle}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: 2, mt: { xs: 1, md: 0 } }}>
                        {grade ? <Chip
                            label={grade}
                            size="small"
                            sx={{
                                background: 'rgba(129, 140, 248, 0.12)',
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                color: '#a5b4fc',
                                border: '1px solid rgba(129, 140, 248, 0.2)',
                            }}
                        /> : <></>
                        }

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
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.75 }}>
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
                {tags && (
                    <Stack direction="row" spacing={0.75} sx={{ mt: 2.5, flexWrap: 'wrap', gap: 0.75 }}>
                        {/* {tags.map((tag) => (
                        <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            variant="outlined"
                            sx={{
                                fontSize: '0.7rem',
                                borderColor: 'rgba(129, 140, 248, 0.25)',
                                color: '#94a3b8',
                                '&:hover': {
                                    borderColor: '#818cf8',
                                    bgcolor: 'rgba(129, 140, 248, 0.08)',
                                },
                            }}
                        />
                    ))} */}
                        {tags.map((tag, tagIndex) => (
                            <Chip
                                key={tag}
                                label={tag}
                                size="small"
                                sx={{
                                    background: tagIndex % 2 === 0
                                        ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                                        : 'linear-gradient(135deg, #ec4899 0%, #f472b5cd 100%)',
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '0.7rem',
                                    boxShadow: '0 2px 8px -2px rgba(99, 102, 241, 0.4)',
                                }}
                            />
                        ))}
                    </Stack>
                )}
            </CardContent>
        </Card>
    );
}
export default TimelineItem;