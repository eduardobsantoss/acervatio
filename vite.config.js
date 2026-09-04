import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Actions sets GITHUB_ACTIONS=true during CI. Project pages (this repo
// isn't <user>.github.io) are served from a sub-path, so the built asset URLs
// need the repo name prefixed there. Local dev and preview stay at the root.
const forPages = !!process.env.GITHUB_ACTIONS;
const base = forPages ? '/acervatio/' : '/';

export default defineConfig({
  base,
  plugins: [react()],
});
