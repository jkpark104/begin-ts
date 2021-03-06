/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const devConfig = require('./config.dev');

const serverConfig = merge(devConfig, {
  devServer: {
    port: 3000,
    static: ['dist'],
  },
});

module.exports = serverConfig;
