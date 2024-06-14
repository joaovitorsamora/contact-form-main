import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.REACT_APP_SERVICE_ID': '"service_ilnmc0q"',
    'import.meta.env.REACT_APP_TEMPLATE_ID': '"template_cbr4o9l"',
    'import.meta.env.REACT_APP_USER_ID': '"RhRJMVx2ixoU1fN9c"',
  },
})
