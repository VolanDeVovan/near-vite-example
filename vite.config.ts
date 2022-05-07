import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get it from neardev (cmd-shell) if not declared in .env
if (!process.env.VITE_CONTRACT_NAME) {
  process.env.VITE_CONTRACT_NAME = process.env.CONTRACT_NAME
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
