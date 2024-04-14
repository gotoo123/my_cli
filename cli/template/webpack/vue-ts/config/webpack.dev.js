const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: 'dist',
    port: '8888',
    open: true,
  },
  optimization: {
    runtimeChunk: 'single'
  }
})
