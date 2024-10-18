import { createLazyFileRoute } from "@tanstack/react-router";
import { AIAssistant } from "modules";

export const Route = createLazyFileRoute("/_authenticated/")({
    component: AIAssistant,
});
