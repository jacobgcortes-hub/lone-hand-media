// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lonehandmedia.com',
  // host: true binds to 0.0.0.0 so the dev/preview server answers on IPv4
  // localhost (127.0.0.1) AND is reachable from other devices on the LAN
  // (e.g. testing animations on a phone). Avoids the IPv6-only default bind.
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
