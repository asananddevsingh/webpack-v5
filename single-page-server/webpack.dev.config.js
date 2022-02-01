const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    // By default, this plugin will clean everythin inside the "path" folder mentioned at output config (at top).
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*', // It will clean everything inside dist folder and its sub folders.
        // Note: It will use pattern "**/*" by default, if we don't configure "cleanOnceBeforeBuildPatterns" property.
        path.join(process.cwd(), 'build/**/*'), // This will match the path patten and delete files and sub-folders.
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack Is Awsome',
      template: './public/index.html',
      meta: {
        author: 'Anand Dev Singh',
      },
    }),
  ],
};
