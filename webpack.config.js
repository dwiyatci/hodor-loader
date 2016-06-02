/**
 * Created by glenn on 01/06/16.
 */

const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool  : 'eval',
  resolve  : {
    root      : [
      path.join(__dirname, 'src'),
    ],
    extensions: ['', '.js', '.html'],
  },
  entry    : {
    app: [
      './demo/app.js',
    ],
  },
  output   : {
    path      : path.join(__dirname, 'build/demo'),
    filename  : '[name].js',
    publicPath: '/',
  },
  plugins  : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin({
      template: './demo/index.html',
      favicon : './demo/favicon.ico',
      filename: 'index.html',
    }),

    new HelloWorldPlugin(),
  ],
  module   : {
    loaders: [
      {
        test   : /\.js$/,
        include: [
          path.join(__dirname, 'demo'),
        ],
        loader : './',
      },
    ],
  },
  devServer: {
    noInfo            : true,
    historyApiFallback: true,
  },
};

function HelloWorldPlugin() {
}
HelloWorldPlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', function () {
    console.log('Hello World!');
  });
};
