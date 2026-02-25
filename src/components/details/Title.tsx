import { Typography } from "@mui/material";
import { Profile } from "../../data/data";

export default function Title() {
    return (
        <Typography
            variant="body2"
            align="center"
            sx={{
                mb: 2.5,
                px: 2,
                py: 0.75,
                bgcolor: 'rgba(129, 140, 248, 0.1)',
                borderRadius: 2,
                color: '#a5b4fc',
                fontWeight: 500,
                fontSize: '0.8rem',
            }}
        >
            {Profile.title}
        </Typography>
    )
}