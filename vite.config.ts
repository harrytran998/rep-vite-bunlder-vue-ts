import vue from '@vitejs/plugin-vue'
import rollupTs from 'rollup-plugin-typescript2'
import type { ConfigEnv, UserConfig } from 'vite'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => ({
  plugins: [
    vue(),
    {
      ...rollupTs({
        check: true,
        tsconfig: 'tsconfig.json',
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: false,
            declaration: true,
            declarationMap: false,
          },
        },
      }),
      enforce: 'pre',
    },
  ],
  build: {
    minify: mode === 'production',
    lib: {
      entry: 'src/index.ts',
      name: 'AButton',
    },
    rollupOptions: {
      input: 'src/index.ts',
      external: ['vue'],
      output: [
        {
          format: 'cjs',
          dir: undefined,
          file: './dist/index.js',
        },
        {
          format: 'es',
          dir: undefined,
          file: './dist/index.mjs',
        },
      ],
    },
  },
})
