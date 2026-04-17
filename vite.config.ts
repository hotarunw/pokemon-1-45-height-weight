import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import packageJson from "./package.json" with { type: "json" };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        name: packageJson.name,
        namespace: "https://github.com/hotarunw",
        version: packageJson.version,
        author: "hotarunw",
        description: packageJson.description,
        match: ["https://yakkun.com/*/zukan/*"],
        license: packageJson.license,
      },
    }),
  ],
});
