import { Box, Typography } from "@mui/material";

const NotFound = () => {
    // const { user } = useAppSelector((state) => state.profile);

    // if (!user) {
    //     return <Navigate to="/login" />;
    // }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={4}
            gap={4}
        >
            <Box maxWidth="400px">
                <Typography variant="h3">Страница не найдена</Typography>
            </Box>
        </Box>
    );
};

export { NotFound };
