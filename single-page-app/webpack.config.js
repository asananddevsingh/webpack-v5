module.exports = {
  entry: './src/index.js',
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
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
