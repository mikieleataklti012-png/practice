const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans the dist folder on every build so old files don't linger
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Automatically injects your JS bundle into this HTML file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Allows you to import CSS files straight into your JS
      },
    ],
  },
  devServer: {
    static: './dist',
    port: 8080,
    hot: true, // Enables hot module replacement
  },
};