const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// console.log(path.resolve(__dirname, '../src/template/index.html'));
// console.log(path.resolve(__dirname, '../public/dist'));

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '../public/dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Template X',
      //生成する HTML ファイル
      filename: path.resolve(__dirname, '../public/index.html'),
      hash: true,
      // テンプレートで使用するファイルのパスを指定
      template: path.resolve(__dirname, '../src/template/index.html'),
      // テンプレートで使用する変数 h1 を設定
      h1: 'Heading Title H1',
    }),
  ],
};
