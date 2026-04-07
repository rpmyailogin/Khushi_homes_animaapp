import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [react()],
  publicDir: "./public",
  base: "/",
  build: {
    outDir: "productionkhushi",
    emptyOutDir: true,
    minify: "esbuild",
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "supabase": ["@supabase/supabase-js"],
          "ui-vendor": ["lucide-react", "class-variance-authority", "@radix-ui/react-slot", "@radix-ui/react-toggle", "@radix-ui/react-toggle-group"],
          "editor": ["react-quill", "quill", "dompurify"],
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
