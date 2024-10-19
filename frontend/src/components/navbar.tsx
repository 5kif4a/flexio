import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { Box, IconButton } from "@mui/material";
import { Link } from "./link";

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
    return (
        <Box
            height="56px"
            borderTop={1}
            borderColor="divider"
            bgcolor={(theme) => theme.palette.background.paper}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
        >
            {buttons.map((button, index) => (
                <Link
                    key={index}
                    to={button.path}
                    activeProps={{
                        color: "primary.main",
                    }}
                    inactiveProps={{
                        color: "text.primary",
                    }}
                >
                    <IconButton color="inherit">
                        <button.icon />
                    </IconButton>
                </Link>
            ))}
        </Box>
    );
};
export { Navbar };
