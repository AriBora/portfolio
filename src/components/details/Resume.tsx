import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import { Profile } from "../../../data/data";

export default function Resume() {
    return (
        <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            href={Profile.resumeUrl}
            sx={{
                my: 1.5,
                px: 3,
                borderRadius: 3,
                padding: '6px 10px',   // reduce vertical + horizontal padding
            }}
        >
            Resume
        </Button>
    )
}