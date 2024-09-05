import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

export default defineConfig({
  integrations: [UnoCSS()],
  redirects: {
    "/x": { destination: "https://x.com/theblapse", status: 302 },
    "/twitter": { destination: "https://twitter.com/theblapse", status: 302 },
    "/spotify": {
      destination: "https://open.spotify.com/user/k858xiwlv3p7cppmv105ug12y",
      status: 302,
    },
    "/github": { destination: "https://github.com/theblapse", status: 302 },
    "/gh": { destination: "https://github.com/theblapse", status: 302 },
    "/lastfm": { destination: "https://last.fm/user/theblapse", status: 302 },
    "/discord": {
      destination: "https://discord.com/users/474929574304677898",
      status: 302,
    },
    "/telegram": { destination: "https://t.me/theblapse", status: 302 },
  },
});
