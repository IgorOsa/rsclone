/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
  nrwlConfig(config);
  return {
    ...config,
    plugins: [...config.plugins, new webpack.ProgressPlugin()]
  };
};
