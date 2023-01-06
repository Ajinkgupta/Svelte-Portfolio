import adapter from '@sveltejs/adapter-netlify'
import path from 'path'
<<<<<<< HEAD
import preprocess from 'svelte-preprocess'
 
=======
import preprocess from 'svelte-preprocess' 

>>>>>>> 8ea29bee8c3968b53aff08dce16f803f2b7be1f9
const config = {
  kit: {
    adapter: adapter(),

    alias: {
      $components: path.resolve('./src/lib/components'),
      $lib: path.resolve('./src/lib'),
      $stores: path.resolve('./src/stores'),
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
<<<<<<< HEAD
 
=======
>>>>>>> 8ea29bee8c3968b53aff08dce16f803f2b7be1f9
