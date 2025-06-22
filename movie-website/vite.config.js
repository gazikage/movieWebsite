// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'


// export default defineConfig({
//   plugins: [react(), tailwindcss(),],
// })


import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
 
export default defineConfig({
  server: {
    port: process.env.PORT,
  },
  plugins: [vercel(), tailwindcss(),],
});