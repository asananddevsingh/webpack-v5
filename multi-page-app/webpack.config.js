const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const portFinderSync = require('portfinder-sync');

module.exports = {
  mode: 'none',
  entry: {
    buttonPage: './src/pages/buttonPage.js', //This name (buttonPage) will be used for name of chunks.
    imagePage: './src/pages/imagePage.js', //This name (imagePage) will be used for name of chunks.
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
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
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    // // This will extract the CSS from bundle.js to seperate file.
    new MiniCssExtractPlugin({
      filename: '[name].styles.css',
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
      title: 'Button Page',
      filename: 'buttonPage.html',
      template: './public/pageTemplate.html',
      meta: {
        author: 'Anand Dev Singh',
      },
      minify: false,
      chunks: ['buttonPage'], // The chunk name should be same as of the page name from the entry object above.
    }),
    new HtmlWebpackPlugin({
      title: 'Image Page',
      filename: 'imagePage.html',
      template: './public/pageTemplate.html',
      meta: {
        author: 'Anand Dev Singh',
      },
      minify: false,
      chunks: ['imagePage'], // The chunk name should be same as of the page name from the entry object above.
    }),
  ],
  devServer: {
    open: true, // Tells dev-server to open the browser after server had been started. Set it to true to open your default browser.
    // port: "auto",
    port: portFinderSync.getPort(3000),
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
    client: {
      // overlay: false, //Shows a full-screen overlay in the browser when there are compiler errors or warnings.
      // OR
      // overlay: {
      //   errors: true,
      //   warnings: false,
      // },
      progress: true,
    },
  },
};
