import { Box } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Profile } from "../../../data/data";

const GitHub = () => {
    return (
        <Box
            component="a"
            href={Profile.github}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                p: 1.25, borderRadius: 2,
                bgcolor: 'rgba(129, 140, 248, 0.08)',
                display: 'flex', color: '#94a3b8',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    bgcolor: '#e2e8f0', color: '#0f0f23',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 20px -4px rgba(129, 140, 248, 0.5)',
                },
            }}
        >
            <GitHubIcon fontSize="small" />
        </Box>
    )
}

export default GitHub;




