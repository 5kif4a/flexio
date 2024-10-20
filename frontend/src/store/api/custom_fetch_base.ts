import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { Mutex } from "async-mutex";
import { API_URL, apiVersion } from "config";
// import { logout, refreshToken } from "services/auth";

// const mutex = new Mutex();

export const baseQuery = fetchBaseQuery({
    baseUrl: (API_URL || "/api/") + apiVersion,
    credentials: "include",
});

// const customBaseQuery: BaseQueryFn<
//     string | FetchArgs,
//     unknown,
//     FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//     await mutex.waitForUnlock();

//     let response = await baseQuery(args, api, extraOptions);

//     if (
//         response.error &&
//         response.error.status === 401 &&
//         (response.error as QueryErrorT)?.data.type === "jwt_auth_error"
//     ) {
//         if (!mutex.isLocked()) {
//             const release = await mutex.acquire();
//             try {
//                 await refreshToken();
//                 response = await baseQuery(args, api, extraOptions);
//             } catch (_) {
//                 await logout();
//                 api.dispatch(logoutAction());
//             } finally {
//                 release();
//             }
//         } else {
//             await mutex.waitForUnlock();
//             response = await baseQuery(args, api, extraOptions);
//         }
//     }
//     return response;
// };

// export default customBaseQuery;
