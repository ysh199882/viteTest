import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import autoprefixer from 'autoprefixer';
import windi from 'vite-plugin-windicss'
import eslintPlugin from 'vite-plugin-eslint';

const variablePath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  root:path.join(__dirname,'src'),
  plugins: [react(),windi(),eslintPlugin()], 

  // css 相关的配置
  css: {
    modules:{
      generateScopedName:"[name]__[local]___[hash:base64:5]"
    },
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss:{
      plugins:[
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  }
})
