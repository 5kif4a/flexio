import { Box, Typography } from "@mui/material";

import { Link } from "./link";

const ErrorFallback = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={4}
            gap={4}
        >
            <Box>
                <Typography variant="h3">
                    Упс...Что-то пошло не так :(
                </Typography>

                <Link to="/">Главная страница</Link>
            </Box>
        </Box>
    );
};

export { ErrorFallback };
