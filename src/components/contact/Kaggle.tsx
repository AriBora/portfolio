import { Box } from "@mui/material";
import SvgIcon from '@mui/material/SvgIcon';
import { Profile } from "../../data/data";

const Kaggle = () => {
    return (
        <Box
            component="a"
            href={Profile.kaggle}
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
                    bgcolor: 'rgb(0, 138, 189)',
                    color: 'white',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px -4px rgba(129, 140, 248, 0.5)',
                },
            }}
        >
            <SvgIcon fontSize="small" viewBox="-6 -3 32 32">
                <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"></path>
            </SvgIcon>
        </Box>
    )
}

export default Kaggle;