/* eslint-disable import/no-extraneous-dependencies */
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: 'lib/index.js',
      name: 'vue-treeselect',
      // the proper extensions will be added
      fileName: 'vue-treeselect',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
