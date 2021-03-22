var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./base.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var port = 3000;

var webpackConfig = merge(baseWebpackConfig, {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true
        })
    ]
});


console.log('Client Server started: http://localhost:' + port + '/');

module.exports = webpackConfig;