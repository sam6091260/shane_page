import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? "https://sam6091260.github.io/shane_page/"
      : "/",
  plugins: [react()],
});
