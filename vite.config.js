// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     // host: true, // Listen on all addresses
//     port: 5173, // You can specify the port if needed
//   },
//   plugins: [react()],
// });
// import path from "path";
// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });

import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  server: {
    host: true, // Listen on all network interfaces
    port: 5173, // You can specify the port if needed
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});