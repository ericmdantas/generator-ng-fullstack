const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [
    './client/dev/index.js'
  ],
  output: {
    path: __dirname + 'client/dev',
    filename: 'bundle.js'
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
    new webpack.HotModuleReplacementPlugin()
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // })
  ]
}