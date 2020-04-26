const path = require('path');
const baseConfig = require('./webpack.config');

module.exports = Object.assign(baseConfig, {
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
  },
  devtool: 'inline-source-map',
});
