import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: '/project-root/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        delivery: resolve(__dirname, 'delivery.html'),
        contacts: resolve(__dirname, 'contacts.html')
      }
    }
  }
})
