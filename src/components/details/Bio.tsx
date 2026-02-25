import { Paper, Typography } from "@mui/material";
import { Profile } from "../../data/data";

export default function Bio() {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2.5,
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(236, 72, 153, 0.05) 100%)',
                borderRadius: 3,
                mb: 3,
                width: '100%',
                border: '1px solid rgba(129, 140, 248, 0.1)',
                bgcolor: 'transparent',
            }}
        >
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    lineHeight: 1.75,
                    fontSize: '0.85rem',
                }}
            >
                {Profile.bio}
            </Typography>
        </Paper>
    )
}