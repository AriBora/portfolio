import { Box, Card, CardContent, Typography } from "@mui/material";
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
                boxShadow: '0 20px 40px -12px rgba(59, 130, 246, 0.25)',
                transform: 'translateY(-4px)',
            },
            marginLeft: index % 2 === 0 ? 7 : 2,
            width: 450,
        }}
    >
        <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
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