import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

const buttons = [
    {
        icon: FitnessCenterIcon,
        path: "/fitness",
    },
    { icon: AutoAwesomeIcon, path: "/" },
    { icon: LocalDiningIcon, path: "/nutrition" },
    { icon: AccountCircleIcon, path: "/profile" },
];

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <Box
            height="56px"
            borderTop={1}
            borderColor="divider"
            bgcolor={(theme) => theme.palette.background.paper}
            display="flex"
            justifyContent="space-around"
        >
            {buttons.map((button, index) => (
                <IconButton
                    key={index}
                    onClick={() =>
                        navigate({
                            to: button.path,
                        })
                    }
                    color="inherit"
                >
                    <button.icon />
                </IconButton>
            ))}
        </Box>
    );
};
export { Navbar };
