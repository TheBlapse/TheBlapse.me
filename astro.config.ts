import UnoCSS from "unocss/astro";

export default {
  integrations: [
    UnoCSS({
      injectReset: false,
      /* options */
    }),
  ],
};
