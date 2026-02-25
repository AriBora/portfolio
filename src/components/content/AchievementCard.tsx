import { Box, Card, CardContent, Typography } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
interface AchievementCardProps {
    title: string;
    issuer: string;
    description: string;
    link: string;
    index: number;
}

const AchievementCard = ({ title, issuer, description, link, index }: AchievementCardProps) => (
    <Card
        sx={{
            mb: 2.5,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            animation: 'slideUp 0.5s ease forwards',
            animationDelay: `${index * 0.1}s`,
            opacity: 0,
            '@keyframes slideUp': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
            },
            '&:hover': {
                boxShadow: '0 20px 40px -12px rgba(245, 158, 11, 0.25)',
                transform: 'translateY(-4px)',
            },
        }}
    >
        <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box
                    sx={{
                        // width: 52,
                        // height: 52,
                        // borderRadius: 3,
                        // background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                        // display: 'flex',
                        // alignItems: 'center',
                        // justifyContent: 'center',
                        // boxShadow: '0 8px 20px -4px rgba(245, 158, 11, 0.4)',
                        width: 52,
                        height: 52,
                        borderRadius: '50%', // Circular for a change
                        background: '#020617', // Darker than the card background
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(251, 191, 36, 0.1)',
                        boxShadow: 'inset 0 0 15px rgba(251, 191, 36, 0.15)',
                    }}
                >
                    <EmojiEventsIcon sx={{ color: '#fbbf24', filter: 'drop-shadow(0 0 5px rgba(251, 191, 36, 0.5))' }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                        {issuer}
                        {/* • {date} */}
                    </Typography>
                </Box>
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
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                {description}
            </Typography>
        </CardContent>
    </Card>
);

export default AchievementCard;