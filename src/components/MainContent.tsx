import { Box, Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';

import { achievementsData, educationData, experienceData, projectsData } from '../../data/data';
import TimelineItem from './content/TimelineItem';
import ProjectCard from './content/ProjectCard';
import AchievementCard from './content/AchievementCard';

const SectionHeader = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 1.5 }}>
        <Box sx={{
            color: 'primary.main',
            display: 'flex',
            p: 1,
            borderRadius: 2,
            bgcolor: 'rgba(6, 182, 212, 0.1)',
        }}>
            {icon}
        </Box>
        <Typography
            variant="h5"
            sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #e2e8f0 0%, #93c5fd 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}
        >
            {title}
        </Typography>
    </Box>
);

const MainContent = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                background: 'transparent',
                pt: 8,
                pb: 12,
                px: { xs: 3, md: 5 },
                gap: 12, // Spacing between sections
            }}
        >
            {/* Experience Section */}
            <Box id="experience" component="section" sx={{ scrollMarginTop: 80 }}>
                <SectionHeader icon={<WorkIcon />} title="Experience" />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {experienceData.map((item, index) => (
                        <TimelineItem key={index} {...item} index={index} isLast={index === experienceData.length - 1} />
                    ))}
                </Box>
            </Box>

            {/* Education Section */}
            <Box id="education" component="section" sx={{ scrollMarginTop: 80 }}>
                <SectionHeader icon={<SchoolIcon />} title="Education" />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {educationData.map((item, index) => (
                        <TimelineItem key={index} {...item} index={index} isLast={index === educationData.length - 1} />
                    ))}
                </Box>
            </Box>

            {/* Projects Section */}
            <Box id="projects" component="section" sx={{ scrollMarginTop: 80 }}>
                <SectionHeader icon={<CodeIcon />} title="Projects" />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {projectsData.map((item, index) => (
                        <ProjectCard key={index} {...item} index={index} />
                    ))}
                </Box>
            </Box>

            {/* Achievements Section */}
            <Box id="achievements" component="section" sx={{ scrollMarginTop: 80 }}>
                <SectionHeader icon={<EmojiEventsIcon />} title="Achievements" />
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, 
                    gap: 3 
                }}>
                    {achievementsData.map((item, index) => (
                        <AchievementCard key={index} {...item} index={index} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default MainContent;
