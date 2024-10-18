import { createRootRoute, Outlet } from "@tanstack/react-router";

const Root = () => {
    // const dispatch = useAppDispatch();

    // const { data: profile } = userApi.useGetProfileQuery();

    // useEffect(() => {
    //     if (profile) {
    //         dispatch(setUser(profile.payload));
    //     }
    // }, [profile]);

    return <Outlet />;
};

export const Route = createRootRoute({
    component: Root,
});
