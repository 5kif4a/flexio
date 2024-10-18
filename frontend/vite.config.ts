import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const oneYear = 60 * 60 * 24 * 365;

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: "localhost",
        port: 3000,
        open: true,
        headers: {
            "Strict-Transport-Security": `max-age=${oneYear}; includeSubDomains; preload`,
        },
        proxy: {
            "/api": {
                target: "http://127.0.0.1:9090",
                changeOrigin: true,
            },
        },
    },
    build: {
        outDir: "./build",
    },
    plugins: [
        react(),
        tsconfigPaths(),
        TanStackRouterVite(),
        basicSsl(),
        splitVendorChunkPlugin(),
    ],
});
