module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.muxiaoguo.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'https://api.muxiaoguo.cn/'
        }
      }
    }
  }
}
