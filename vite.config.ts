import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { snapCSS } from "snapcss";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio",
  plugins: [react(), snapCSS()],
});
