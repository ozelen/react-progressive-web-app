'use strict';

const webpack = require("webpack");
const path = require('path');

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    app: './app.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'] },
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/dist`,
    publicPath: '/assets'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 8181
  }
}