// Configured for static SPA deployment on Turbohost (no Node.js server needed).
// Nitro is disabled and TanStack Start runs in SPA mode.
// base: './' ensures asset paths are relative (works in any folder on the server).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    spa: { enabled: true },
  },
  nitro: false,
  vite: {
    base: "",
  },
});
