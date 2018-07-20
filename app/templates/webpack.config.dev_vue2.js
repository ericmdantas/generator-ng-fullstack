const webpack = require('webpack')
const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [    
    './client/dev/index.js'
  ],
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
    hot: true,
	proxy: {
      '/api/': {
        secure: false,
        target: 'http://127.0.0.1:3333',
      }
    }
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
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          'file-loader',
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
      },
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