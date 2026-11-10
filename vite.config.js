import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Dynamic base path: set automatically by GitHub Actions deploy workflow.
  // Falls back to repo name for local development.
  base: process.env.VITE_BASE_PATH ?? '/portfolio/',});
