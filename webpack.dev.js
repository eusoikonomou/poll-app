const path = require('path');
const baseConfig = require('./webpack.config');

module.exports = Object.assign(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    open: true,
  },
});
