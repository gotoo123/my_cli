const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const ZipWebpackPlugin = require('zip-webpack-plugin');
const { name: ProjectName, version: Version} = require('../package.json');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new ZipWebpackPlugin({
      filename: `${ProjectName}-${Version}.zip`,
      exclude:[/sourcemaps/]
    })
  ]
})
