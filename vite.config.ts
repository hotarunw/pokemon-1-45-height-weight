import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import packageJson from "./package.json" assert { type: "json" };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        name: packageJson.name,
        namespace: "https://github.com/hotarupoyo",
        version: packageJson.version,
        author: "hotarupoyo",
        description: packageJson.description,
        match: [
          "https://yakkun.com/*/zukan/*",
          "https://wiki.xn--rckteqa2e.com/wiki/%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E3%81%AE%E3%81%9F%E3%81%8B%E3%81%95%E3%83%BB%E3%81%8A%E3%82%82%E3%81%95%E4%B8%80%E8%A6%A7",
          "https://wiki.xn--rckteqa2e.com/wiki/*",
        ],
        license: packageJson.license,
      },
    }),
  ],
});
