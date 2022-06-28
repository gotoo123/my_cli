const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: './src/index.jsx',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/template.html'
    })
  ],
  devServer: {
    static: './dist',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    runtimeChunk: "single",
  }
}