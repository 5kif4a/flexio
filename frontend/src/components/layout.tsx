import { Box } from "@mui/material";
import { Outlet } from "@tanstack/react-router";
import { Navbar } from "./navbar";

const Layout = () => {
    return (
        <Box display="flex" flexDirection="column" height="100%">
            <Box flex={1}>
                <Outlet />
            </Box>

            <Navbar />
        </Box>
    );
};

export { Layout };
