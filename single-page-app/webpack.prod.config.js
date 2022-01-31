const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    // path: "./dist", // It will throw an error of not being "absolut path".
    // path: "/dist", // It will create the dist folder at the root drive e.g. C:/> or D:/> etc.
    path: path.resolve(__dirname, './dist'),
    // publicPath: "auto", // This is the default option in webpack >= v5.
    publicPath: '',
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
    // No need to install it explicitly in webpack >= 5. This gets included by default for production mode.
    // new TerserPlugin(),
    // This will extract the CSS from bundle.js to seperate file.
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
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
      // filename: "myIndex.html", // We can customize the file name, by default is index.html.
      template: './public/index.html',
      meta: {
        author: 'Anand Dev Singh',
      },
    }),
  ],
};
