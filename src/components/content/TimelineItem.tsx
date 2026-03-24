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
    isLast?: boolean;
}

const TimelineItem = ({ title, subtitle, date, grade, description, tags, index, isLast = false }: TimelineItemProps) => {
    const [expanded, setExpanded] = useState(false);
    const visibleItems = expanded ? description : description.slice(0, 2);

    return (
        <Box sx={{ display: 'flex', position: 'relative', width: '100%' }}>
            {/* Timeline Line & Dot (Left Column) */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mr: { xs: 2, md: 3 },
                    minWidth: { xs: 16, md: 20 },
                }}
            >
                {/* Visual Dot */}
                <Box
                    sx={{
                        width: { xs: 14, md: 16 },
                        height: { xs: 14, md: 16 },
                        borderRadius: '50%',
                        mt: 3.5, // Align with card title
                        zIndex: 1,
                        background: '#facc15',
                        boxShadow: '0 0 20px rgba(250, 204, 21, 0.4)',
                    }}
                />
                {/* Connecting Line */}
                {!isLast && (
                    <Box
                        sx={{
                            width: 2,
                            flexGrow: 1,
                            bgcolor: 'rgba(148, 163, 184, 0.15)',
                            mt: 1,
                            // Extend line past the card to connect with the next item's dot
                            mb: -3.5,
                        }}
                    />
                )}
            </Box>

            {/* Card Content (Right Column) */}
            <Card
                sx={{
                    flex: 1,
                    mb: isLast ? 0 : 4, // Spacing between items handled here
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
                        boxShadow: '0 20px 40px -12px rgba(255, 255, 255, 0.05)',
                        transform: 'translateY(-4px)',
                        borderColor: 'rgba(250, 204, 21, 0.3)',
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
                                    color: '#facc15',
                                    letterSpacing: '0.02em',
                                }}
                            >
                                {subtitle}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1.5, mt: { xs: 1, md: 0 }, flexWrap: 'wrap' }}>
                            {grade ? <Chip
                                label={grade}
                                size="small"
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    fontWeight: 600,
                                    fontSize: '0.75rem',
                                    color: '#facc15',
                                    border: '1px solid rgba(250, 204, 21, 0.1)',
                                }}
                            /> : <></>
                            }

                            <Chip
                                label={date}
                                size="small"
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    fontWeight: 600,
                                    fontSize: '0.75rem',
                                    color: '#94a3b8',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
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
                                    sx={{ textTransform: 'none', p: 0, color: 'rgba(250, 204, 21, 0.7)' }}
                                >
                                    {expanded ? 'Show less' : `Show ${description.length - 2} more`}
                                </Button>
                            </Box>
                        )}
                    </Typography>
                    {tags && (
                        <Stack direction="row" spacing={0.75} sx={{ mt: 2.5, flexWrap: 'wrap', gap: 0.75 }}>
                            {tags.map((tag) => (
                                <Chip
                                    key={tag}
                                    label={tag}
                                    size="small"
                                    sx={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: '#94a3b8',
                                        fontWeight: 600,
                                        fontSize: '0.7rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        '&:hover': {
                                            background: 'rgba(250, 204, 21, 0.05)',
                                            borderColor: '#facc15',
                                            color: '#facc15',
                                            transform: 'translateY(-2px)',
                                        },
                                    }}
                                />
                            ))}
                        </Stack>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
}
export default TimelineItem;