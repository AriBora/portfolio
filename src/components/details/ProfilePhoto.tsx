import { Avatar, Box } from "@mui/material";
import { Profile } from "../../data/data";

interface ProfilePhotoProps {
    isExpanded: boolean;
}
export default function ProfilePhoto({ isExpanded }: ProfilePhotoProps) {
    return (
        <Box
            sx={{
                position: 'relative',
                mb: isExpanded ? 3 : 2,
            }}
        >
            <Avatar
                src={Profile.avatarUrl}
                alt={Profile.name}
                sx={{
                    width: isExpanded ? 130 : 50,
                    height: isExpanded ? 130 : 50,
                    border: '4px solid',
                    borderColor: 'rgba(129, 140, 248, 0.4)',
                    boxShadow: '0 12px 40px -8px rgba(99, 102, 241, 0.5)',
                    transition: 'all 0.3s ease',
                }}
            >
                {Profile.name.charAt(0)}
            </Avatar>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: isExpanded ? 8 : 2,
                    right: isExpanded ? 8 : 2,
                    width: isExpanded ? 20 : 12,
                    height: isExpanded ? 20 : 12,
                    bgcolor: '#34d399',
                    borderRadius: '50%',
                    border: '3px solid #0e0e24',
                    boxShadow: '0 2px 8px rgba(52, 211, 153, 0.5)',
                }}
            />
        </Box>
    )
}