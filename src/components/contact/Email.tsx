import { Box, Typography } from "@mui/material";
import { Profile } from "../../../data/data";
import EmailIcon from '@mui/icons-material/Email';

export default function Email() {
    return (
        <Box
            component="a"
            href={`mailto:${Profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                display: 'flex', alignItems: 'center', gap: 1.5,
                p: 1.5, borderRadius: 2,
                bgcolor: 'rgba(129, 140, 248, 0.06)',
                transition: 'all 0.2s',
                '&:hover': { bgcolor: 'rgba(129, 140, 248, 0.12)' },
            }}
        >
            <Box sx={{
                p: 0.75,
                borderRadius: 1.5,
                bgcolor: 'rgba(129, 140, 248, 0.15)',
                display: 'flex',
            }}>
                <EmailIcon sx={{ color: 'primary.light', fontSize: 18 }} />
            </Box>
            <Typography variant="body2" color="text.secondary" noWrap sx={{ fontSize: '0.85rem' }}>
                {Profile.email}
            </Typography>
        </Box>
    )
}