import { useState } from 'react';
import {
    Box,
    Tabs,
    Tab,
    Typography,
    useMediaQuery,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';

import { achievementsData, educationData, experienceData, projectsData } from '../../data/data';
import TabPanel from './content/TabPanel';
import TimelineItem from './content/TimelineItem';
import ProjectCard from './content/ProjectCard';
import AchievementCard from './content/AchievementCard';
import theme from '../theme/Theme';

const MainContent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const tabConfig = [
        { label: 'Experience', icon: <WorkIcon sx={{ mr: 1 }} /> },
        { label: 'Education', icon: <SchoolIcon sx={{ mr: 1 }} /> },
        { label: 'Projects', icon: <CodeIcon sx={{ mr: 1 }} /> },
        { label: 'Achievements', icon: <EmojiEventsIcon sx={{ mr: 1 }} /> },
    ];

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                height: { xs: 'auto', md: 'calc(100vh - 64px)' },
                minHeight: { xs: 'calc(100vh - 400px)', md: 'auto' },
                background: 'linear-gradient(180deg, #0a0a1a 0%, #0f0f2e 100%)',
            }}
        >
            {/* Tab Navigation */}
            <Box
                sx={{
                    bgcolor: 'rgba(10, 10, 26, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderBottom: '1px solid',
                    borderColor: 'rgba(129, 140, 248, 0.1)',
                    px: { xs: 2, sm: 3, md: 4 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                    top: 64,
                    zIndex: 10,
                }}
            >
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        '& .MuiTab-root': {
                            minHeight: isMobile ? 64 : 75,
                            px: 3,
                        },
                    }}
                >
                    {tabConfig.map((tab, index) => (
                        <Tab
                            key={tab.label}
                            icon={tab.icon}
                            iconPosition="start"
                            label={tab.label}
                            id={`tab-${index}`}
                            aria-controls={`tabpanel-${index}`}
                        />
                    ))}
                </Tabs>
            </Box>

            {/* Tab Panels with Scrollable Content */}
            <Box
                sx={{
                    flexGrow: 1,
                    overflowY: 'auto',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: { xs: 0, md: 32 },
                        top: 0,
                        bottom: 0,
                        width: 2,
                        background: 'linear-gradient(180deg, rgba(129, 140, 248, 0.25) 0%, rgba(244, 114, 182, 0.1) 100%)',
                        display: { xs: 'none', md: 'block' },
                    },
                }}
            >
                <TabPanel value={activeTab} index={0}>
                    <Box sx={{ pl: { xs: 0, md: 4 } }}>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 4,
                                fontWeight: 800,
                                background: 'linear-gradient(135deg, #e2e8f0 0%, #a5b4fc 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Experience
                        </Typography>
                        {experienceData.map((item, index) => (
                            <TimelineItem key={index} {...item} index={index} />
                        ))}
                    </Box>
                </TabPanel>

                <TabPanel value={activeTab} index={1}>
                    <Box sx={{ pl: { xs: 0, md: 4 } }}>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 4,
                                fontWeight: 800,
                                background: 'linear-gradient(135deg, #e2e8f0 0%, #a5b4fc 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Education
                        </Typography>
                        {educationData.map((item, index) => (
                            <TimelineItem key={index} {...item} index={index} />
                        ))}
                    </Box>
                </TabPanel>

                <TabPanel value={activeTab} index={2}>
                    <Box sx={{ pl: { xs: 0, md: 4 } }}>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 4,
                                fontWeight: 800,
                                background: 'linear-gradient(135deg, #e2e8f0 0%, #a5b4fc 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Projects
                        </Typography>
                        {projectsData.map((item, index) => (
                            <ProjectCard key={index} {...item} index={index} />
                        ))}
                    </Box>
                </TabPanel>

                <TabPanel value={activeTab} index={3}>
                    <Box sx={{ pl: { xs: 0, md: 4 } }}>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 4,
                                fontWeight: 800,
                                background: 'linear-gradient(135deg, #e2e8f0 0%, #a5b4fc 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Achievements
                        </Typography>
                        {achievementsData.map((item, index) => (
                            <AchievementCard key={index} {...item} index={index} />
                        ))}
                    </Box>
                </TabPanel>
            </Box>
        </Box>
    );
};

export default MainContent;
