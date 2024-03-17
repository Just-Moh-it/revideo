import markdownLiterals from '@revideo/internal/vite/markdown-literals';
import {defineConfig} from 'vitest/config';

export default defineConfig({
  plugins: [markdownLiterals()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
