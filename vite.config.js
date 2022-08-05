import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Ref: https://github.com/vitejs/vite/issues/3105#issuecomment-939703781
  const env = loadEnv(mode, 'env')
  const htmlPlugin = () => {
    return {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(/<%=(.*?)%>/g, function (match, p1) {
          return env[p1]
        })
      },
    }
  }

  return {
    plugins: [
      vue(),
      vueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: path.resolve(__dirname, './src/locales/**'),
      }),
      htmlPlugin(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      environment: 'happy-dom',
    },
  }
})
