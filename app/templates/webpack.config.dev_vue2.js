const webpack = require('webpack')
const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [    
    './client/dev/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'client/dev'),
    publicPath: '/',
    filename: '[name].bundle.js'
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
  resolve: {
    extensions: [
      ".ts", 
      ".tsx", 
      ".js",
      ".vue",
      ".json",
    ],
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [	  
      {
        test: /\.html$/,
        use: 'vue-html-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [    
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join('client/dev', 'index.html'),
      inject: true
    }),
  ]
}