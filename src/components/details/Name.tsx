import { Typography } from "@mui/material";
import { Profile } from "../../data/data";

export default function Name() {
    return (
        <Typography
            variant="h5"
            component="h1"
            align="center"
            sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #e2e8f0 0%, #a5b4fc 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 0.5,
            }}
        >
            {Profile.name}
        </Typography>
    )
}