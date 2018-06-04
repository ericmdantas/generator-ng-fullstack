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
    path: path.resolve(__dirname, 'client/dist/'),
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
      filename: 'index.html',
      template: path.join('client/dist', 'index.html'),
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