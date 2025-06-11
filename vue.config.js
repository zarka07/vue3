const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  devServer: {
    proxy: {
      "^/user": {
        target: "https://api.dev.taptiqapp.com",
        ws: true,
        changeOrigin: true
      }
    }
  },
})
