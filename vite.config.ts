import vue from '@vitejs/plugin-vue'
import rollupTs from 'rollup-plugin-typescript2'
import path from 'path'
import type { ConfigEnv, UserConfig } from 'vite'

const resolvePath = (p) => path.resolve(__dirname, p)

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => ({
  plugins: [
    vue(),
    // {
    //   ...rollupTs({
    //     check: true,
    //     tsconfig: path.resolve(__dirname, `tsconfig.json`), // your tsconfig.json path
    //     tsconfigOverride: {
    //       compilerOptions: {
    //         sourceMap: false,
    //         declaration: true,
    //         declarationMap: false,
    //       },
    //     },
    //   }),
    //   enforce: 'pre',
    // },
  ],
  build: {
    minify: mode === 'production',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'AButton',
    },
    rollupOptions: {
      input: resolvePath('src/index.ts'),
      plugins: [
        rollupTs({
          check: true,
          tsconfig: path.resolve(__dirname, `tsconfig.json`), // your tsconfig.json path
          // tsconfigOverride: {
          //   compilerOptions: {
          //     sourceMap: false,
          //     declaration: true,
          //     declarationMap: false,
          //   },
          // },
        }),
      ],
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
