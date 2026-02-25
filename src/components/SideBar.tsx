import { Box, Typography, Paper, Divider, Stack, IconButton, Collapse, useMediaQuery } from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Name from './details/Name';
import Title from './details/Title';
import Email from './contact/Email';
import Address from './contact/Address';
import ProfilePhoto from './details/ProfilePhoto';
import Skills from './details/Skills';
import Bio from './details/Bio';
import { Profile } from '../../data/data';
import theme from '../theme/Theme';
import LinkedIn from './contact/LinkedIn';
import GitHub from './contact/Github';
import Kaggle from './contact/Kaggle';

interface SidebarProps {
    isExpanded: boolean;
    onToggle: () => void;
}

const Sidebar = ({
    isExpanded,
    onToggle,
}: SidebarProps) => {
    const collapsedWidth = 100;
    const expandedWidth = 350;
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Paper
            elevation={0}
            sx={{
                width: { xs: '100%', md: isExpanded ? expandedWidth : collapsedWidth },
                minWidth: { md: isExpanded ? expandedWidth : collapsedWidth },
                height: { xs: 'auto', md: 'calc(100vh - 64px)' },
                position: { xs: 'relative', md: 'sticky' },
                top: { md: 64 },
                p: isExpanded ? 3 : 1.5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRight: { md: '1px solid', color: 'rgba(129, 140, 248, 0.25)' },
                borderBottom: { xs: '1px solid', md: 'none' },
                borderColor: 'rgba(129, 140, 248, 0.1)',
                bgcolor: '#0e0e24',
                overflowY: 'auto',
                overflowX: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                background: {
                    md: isExpanded
                        ? 'linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.03) 100%), #0e0e24'
                        : '#0e0e24',
                },
                '&::-webkit-scrollbar': {
                    width: 6,
                },
                '&::-webkit-scrollbar-thumb': {
                    bgcolor: 'rgba(129, 140, 248, 0.3)',
                    // borderRadius: 3,
                },
            }}
        >
            {/* Toggle Button - Desktop Only */}
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    width: '100%',
                    justifyContent: isExpanded ? 'flex-end' : 'center',
                    mb: 2,
                }}
            >
                <IconButton
                    onClick={onToggle}
                    size="small"
                    sx={{
                        bgcolor: 'rgba(129, 140, 248, 0.08)',
                        border: '1px solid',
                        borderColor: 'rgba(129, 140, 248, 0.15)',
                        color: '#94a3b8',
                        transition: 'all 0.2s',
                        '&:hover': {
                            bgcolor: 'primary.main',
                            color: '#0f0f23',
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    {isExpanded ? <ChevronLeftIcon fontSize="small" /> : <ChevronRightIcon fontSize="small" />}
                </IconButton>
            </Box>

            {/* Profile Photo */}
            <ProfilePhoto isExpanded={isExpanded} />

            <Collapse in={isExpanded} timeout={300}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', mb: 4 }}>
                    {/* Name and Title */}
                    <Name />
                    <Title />

                    <Divider sx={{ width: '80%', mb: 3, borderColor: 'rgba(129, 140, 248, 0.12)' }} />

                    {/* Contact Details */}
                    <Stack spacing={1.5} sx={{ width: '100%', mb: 3, px: 1 }}>
                        <Email />
                        <Address />
                    </Stack>

                    {/* Social Links */}
                    {isMobile ?
                        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                            {Profile.linkedIn && <LinkedIn />}
                            {Profile.github && <GitHub />}
                            {Profile.kaggle && <Kaggle />}
                        </Stack> : <></>
                    }

                    <Divider sx={{ width: '80%', mb: 3, borderColor: 'rgba(129, 140, 248, 0.12)' }} />

                    <Bio />
                    <Skills />
                </Box>
            </Collapse>

            {/* Collapsed View - Show only initials */}
            {!isExpanded && (
                <Box sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'center', mt: 1 }}>
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {Profile.name.split(' ').map(n => n[0]).join('')}
                    </Typography>
                </Box>
            )}
        </Paper>
    );
};

export default Sidebar;
