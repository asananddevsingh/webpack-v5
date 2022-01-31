const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // path: "./dist", // It will throw an error of not being "absolut path".
    // path: "/dist", // It will create the dist folder at the root drive e.g. C:/> or D:/> etc.
    path: path.resolve(__dirname, './dist'),
    // publicPath: "auto", // This is the default option in webpack >= v5.
    publicPath: '../dist/',
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|jpeg)$/,
        type: 'asset', // 'asset/resource', 'asset/inline', 'asset/source'.
        parser: {
          dataUrlCondition: {
            maxSize: 5 * 1024, //5kb. // It's default size is 8kb. That means anything greater than this size will be not part of bundle.
          },
        },
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new TerserPlugin(), // No need to install it explicitly in webpack >= 5.
    new MiniCssExtractPlugin({
      // This will extract the CSS from bundle.js to seperate file.
      filename: 'styles.css',
    }),
  ],
};
