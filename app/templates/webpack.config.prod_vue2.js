const webpack = require('webpack')
const path = require('path')
const webpackMerge = require('webpack-merge')
const devConfig = require('./webpack.config.dev.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(devConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/client/dist/'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join('client/dev', 'index.html'),
      template: path.join('client/dev', 'index.html'),
      inject: true
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: 'somewhere',
    //     to: 'somewhere else'
    //   }
    // ])
  ]
});