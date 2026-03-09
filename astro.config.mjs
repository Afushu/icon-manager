import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: './dist',
  build: {
    sourcemap: false,           // 禁用 sourcemap（最关键）
    inlineStylesheets: 'auto',   // 内联小样式
    assets: 'assets'             // 资产目录
  },
  compressHTML: true,            // 压缩 HTML
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      },
      minify: 'terser',
      cssCodeSplit: false,       // 禁用 CSS 分割
      emptyOutDir: true
    }
  }
});
