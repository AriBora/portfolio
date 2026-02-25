import { Box } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Profile } from "../../data/data";

const LinkedIn = () => {
    return (
        <Box
            component="a"
            href={Profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                p: 1.25,
                borderRadius: 2,
                bgcolor: 'rgba(99, 102, 241, 0.06)',
                display: 'flex',
                color: 'text.secondary',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    bgcolor: 'rgb(13, 152, 226)',
                    color: 'white',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px -4px rgba(129, 140, 248, 0.5)',
                },
            }}
        >
            <LinkedInIcon fontSize="small" />
        </Box>
    )
}

export default LinkedIn;