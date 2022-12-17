import adapter from '@sveltejs/adapter-netlify';
import preprocess from "svelte-preprocess";
export default {
  kit: {
    adapter: adapter(),
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};
 
