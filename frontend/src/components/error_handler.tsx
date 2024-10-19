import { Container, Typography } from "@mui/material";
import { FC } from "react";
import { NotFound } from "./not_found";

const ErrorHandler: FC<{ error: any; message?: string }> = ({
    error,
    message = "error.default",
}) => {
    if ("status" in error && [403, 404].includes(error.status)) {
        return <NotFound />;
    }

    return (
        <Container sx={{ px: 4, pb: 4 }} disableGutters>
            <Typography fontSize={20} fontWeight="bold">
                {message}
            </Typography>
        </Container>
    );
};

export { ErrorHandler };
