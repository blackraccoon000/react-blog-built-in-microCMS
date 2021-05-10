const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    historyApiFallback: true,
    port: 8081,
    publicPath: '/dist/',
  },
};
