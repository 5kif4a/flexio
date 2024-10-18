import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/nutrition/")({
    component: () => <div>Hello /_authenticated/nutrition/!</div>,
});
