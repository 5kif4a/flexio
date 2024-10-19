import { createLazyFileRoute } from "@tanstack/react-router";
import { Profile } from "modules";

export const Route = createLazyFileRoute("/_authenticated/profile")({
    component: Profile,
});
