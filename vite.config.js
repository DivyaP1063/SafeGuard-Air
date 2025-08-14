import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteCompression({
      algorithm: 'gzip', // or 'brotliCompress'
      ext: '.gz', // output file extension
      deleteOriginFile: false, // set to true if you want to remove original files
    }),
  ],
});
