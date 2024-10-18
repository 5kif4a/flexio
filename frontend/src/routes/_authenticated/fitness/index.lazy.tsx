import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/fitness/")({
    component: () => <div>Hello /_authenticated/fitness/!</div>,
});
