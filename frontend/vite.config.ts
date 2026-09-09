/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The `test` block is read by Vitest. It sits on an intermediate typed variable
// so `tsc -b` skips the excess-property check against Vite's `UserConfig`, which
// has no `test` key of its own.
const config: UserConfig & { test?: Record<string, unknown> } = {
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false,
  },
}

// https://vite.dev/config/
export default defineConfig(config)
