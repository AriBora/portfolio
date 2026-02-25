import { Box, Typography } from "@mui/material";
import { Profile } from "../../../data/data";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import theme from "../../theme/Theme";

export default function Address() {
    return (
        <Box
            sx={{
                display: 'flex', alignItems: 'center', gap: 1.5,
                p: 1.5, borderRadius: 2,
                bgcolor: theme.palette.secondary.main + '0F',
                transition: 'all 0.2s',
                '&:hover': { bgcolor: theme.palette.secondary.main + '1F' },
            }}
        >
            <Box sx={{
                p: 0.75,
                borderRadius: 1.5,
                bgcolor: theme.palette.secondary.main + '26',
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