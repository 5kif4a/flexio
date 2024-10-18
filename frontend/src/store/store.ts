import { configureStore } from "@reduxjs/toolkit";
import { aiApi } from "./api";
import { profileReducer } from "./slices";

export const store = configureStore({
    devTools: import.meta.env.DEV,
    reducer: {
        profile: profileReducer,
        [aiApi.reducerPath]: aiApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([aiApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
