import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "regenerator-runtime/runtime";
import App from "./App.tsx";
import "./index.css";

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
