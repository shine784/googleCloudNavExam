var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var rootAssetPath = path.resolve(__dirname, '../dist');
var port = 3000;

module.exports = {
    entry: {
        bundle: ['@babel/polyfill','./src/index.tsx']
    },
    output: {
        path: rootAssetPath,
        filename: '[name].js'
    },
    resolve: {
      modules: [
      'node_modules',
      path.resolve(__dirname, '..', 'src')
      ],
      extensions: [".ts", ".tsx", ".js",".jsx"]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        host: 'localhost',
        port: port,
        contentBase: __dirname,
        proxy: {
            '/api/**': {
                target: 'http://localhost:9999',
                secure: false,
                changeOrigin: true
            }
        }
    },
    //devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, 'babel.conf.js'),
            },
          },
        },
          {
            test: /\.(css)|(scss)$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
            ],
            exclude: /node_modules/
          },
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: { reportFiles: ['src/**/*.{ts,tsx}', '!src/skip.ts'] }
          }
      ]
    },
    devtool: 'source-map',
    mode: 'development',
    plugins: [
        new MiniCssExtractPlugin({ filename: 'app.css' })
    ]
};
