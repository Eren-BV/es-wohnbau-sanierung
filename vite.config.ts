import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // P:\ ist bei diesem Nutzer ein Netzlaufwerk - natives fs.watch schlägt dort fehl,
    // daher Polling. node_modules explizit ausschließen (sonst bremst der Poll den Server).
    watch: { usePolling: true, ignored: ['**/node_modules/**'] },
    port: 5181,
  },
})
