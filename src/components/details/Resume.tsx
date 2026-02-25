import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import { Profile } from "../../../data/data";

export default function Resume() {
    return (
        <Button
            variant="contained"
            // color='primary'
            startIcon={<DownloadIcon />}
            href={Profile.resumeUrl}
            sx={{
                backgroundColor: '#818cf8',
                my: 1.5,
                px: 3,
                borderRadius: 3,
                padding: '6px 10px',   // reduce vertical + horizontal padding
                '&:hover': {
                    boxShadow: '0 6px 20px 0 rgba(129, 140, 248, 0.45)',
                    transform: 'translateY(-1px)',
                    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                },
            }}
        >
            Resume
        </Button>
    )
}