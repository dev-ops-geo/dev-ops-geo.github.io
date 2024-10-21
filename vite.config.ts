import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    proxy: {
      "/static": "https://static.hungermapdata.org",
    }  
  },
  build: {
    outDir: './docs'
  },
  plugins: [react()],
});
