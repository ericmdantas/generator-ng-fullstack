const webpack = require('webpack')
const path = require('path')
const webpackMerge = require('webpack-merge')
const devConfig = require('./webpack.config.dev.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = webpackMerge(devConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'client/dist/'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },  
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['client/dist']),
    new webpack.NoEmitOnErrorsPlugin(),
    new UglifyJsWebpackPlugin({
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join('client/dev', 'index.html'),
      inject: true
    }),
  ]
});