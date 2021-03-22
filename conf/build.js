var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./base.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = merge(baseWebpackConfig, {
    plugins: [
        new webpack.HotModuleReplacementPlugin({
          multiStep: true
        }),
        new HtmlWebpackPlugin({
          filename: path.resolve(__dirname, '../dist/index.html'),
          template: path.resolve(__dirname, '../index.html'),
          inject: true,
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
          },
          chunksSortMode: 'dependency'
        })
    ]
});

module.exports = webpackConfig;