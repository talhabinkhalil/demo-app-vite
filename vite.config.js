import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: {
      allowedHeaders: "*",
    },
    proxy: {
      "/api": {
        target: `http://3.239.75.182:3000`,
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, '')
      },
    },
  },
  define: {
    "process.env": {},
  },
});

// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";
// import { nodePolyfills } from "vite-plugin-node-polyfills";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), nodePolyfills()],
//   server: {
//     cors: {
//       allowedHeaders: "*",
//     },
//     proxy: {
//       "/api": {
//         target: `http://3.239.75.182:3000`,
//         // target: "http://localhost:8000/",
//         changeOrigin: true,
//         // rewrite: path => path.replace(/^\/api/, '')
//       },
//     },
//   },
//   define: {
//     "process.env": {},
//   },
// });
