import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, Box, Button, Link, Typography } from "@mui/material";

const sadHamsterImageUrl =
    "https://i.redd.it/i-crocheted-the-sad-hamster-meme-v0-g4ikbf1zf6nc1.jpg?width=1080&format=pjpg&auto=webp&s=c0f7f8a392bba9fa81e2840229d5b586c655d3ab";
const sourceCodeUrl = "https://github.com/5kif4a/flexio";
const ricardoMilosImageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zex0x0eRPmIks3IcgLFFBIgrObVVrVhpxA&s";

const Profile = () => {
    return (
        <Box
            p={2}
            pt={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            height={1}
        >
            <Avatar sx={{ width: 128, height: 128 }} src={sadHamsterImageUrl} />

            <Typography variant="h5">Kevin Levrone</Typography>

            <Button
                startIcon={<EditIcon />}
                variant="outlined"
                color="secondary"
                fullWidth
            >
                Редактировать данные
            </Button>
            <Button startIcon={<LogoutIcon />} variant="outlined" fullWidth>
                Выйти
            </Button>

            <Box flex={1} />

            <Box display="flex" alignItems="center" gap={0.5}>
                <Typography fontSize={14} color="text.secondary">
                    flexio
                </Typography>

                <Avatar
                    sx={{ width: 20, height: 20 }}
                    src={ricardoMilosImageUrl}
                />

                <Link href={sourceCodeUrl} fontSize={14}>
                    Github
                </Link>
            </Box>
        </Box>
    );
};

export { Profile };
