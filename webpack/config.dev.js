// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const __root = process.cwd();

const devConfig = {
  target: ['web'],
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__root, 'src/index.ts'),
  output: {
    path: path.resolve(__root, 'dist'),
    filename: 'js/[name].js',
    assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg|webp|bmp)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.jsx?$/i,
        exclude: /(node_modules|dist)/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'ts-loader',
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true,
          },
        },
      },
    ],
  },
};

module.exports = devConfig;
