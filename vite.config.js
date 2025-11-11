import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/shabbat-booking/",
  server: {
    proxy: {
      "/api": {
        target: "https://shabbat-booking.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/shabbat-booking/api"),
      },
    },
  },
});
