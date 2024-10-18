import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./custom_fetch_base";

const tagTypes = ["Content"];

export const aiApi = createApi({
    reducerPath: "aiApi",
    baseQuery,
    tagTypes,
    endpoints: (build) => ({
        generateContent: build.mutation<any, string>({
            query: (prompt) => ({
                url: "ai/generate",
                method: "POST",
                body: {
                    prompt,
                },
            }),
        }),
    }),
});
