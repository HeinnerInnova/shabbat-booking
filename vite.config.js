import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: "/shabbat-booking/",
  server:
    mode === "development"
      ? {
          proxy: {
            "/api": {
              target: "https://shabbat-booking.onrender.com",
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, "/shabbat-booking/api"),
            },
          },
        }
      : undefined,
}));
