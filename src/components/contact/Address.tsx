import { Box, Typography } from "@mui/material";
import { Profile } from "../../data/data";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Address() {
    return (
        <Box
            sx={{
                display: 'flex', alignItems: 'center', gap: 1.5,
                p: 1.5, borderRadius: 2,
                bgcolor: 'rgba(244, 114, 182, 0.06)',
                transition: 'all 0.2s',
                '&:hover': { bgcolor: 'rgba(244, 114, 182, 0.12)' },
            }}
        >
            <Box sx={{
                p: 0.75,
                borderRadius: 1.5,
                bgcolor: 'rgba(244, 114, 182, 0.15)',
                display: 'flex',
            }}>
                <LocationOnIcon sx={{ color: 'secondary.light', fontSize: 18 }} />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                {Profile.location}
            </Typography>
        </Box>
    )
}