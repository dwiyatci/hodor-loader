/**
 * Created by glenn on 01.06.16.
 * Last updated on 14.10.18.
 */

const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HelloWorldPlugin = require('./hello-world-plugin');

module.exports = env => {
  const config = {
    mode: eitherDevOrProd('development', 'production'),
    entry: './demo/src/index.js',
    output: {
      path: resolve(__dirname, 'demo/dist'),
      filename: eitherDevOrProd('[name].js', '[name].[chunkhash].js')
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
              options: { cacheDirectory: true }
            },
            {
              loader: resolve('./'),
            }
          ]
        },
        {
          test: /\.html$/,
          use: 'html-loader'
        }
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),

      // Caching
      new HtmlWebpackPlugin({
        template: './demo/src/index.tpl.html',
        favicon: './demo/src/favicon.ico'
      }),

      new HelloWorldPlugin()
    ],
    optimization: {
      // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
      splitChunks: {
        chunks: 'all',
        name: false
      },
      runtimeChunk: true
    },
    devServer: {
      contentBase: resolve(__dirname, 'demo/dist'),
      compress: true,
      noInfo: false,
      historyApiFallback: true,
      https: true
    }
  };

  return config;

  function eitherDevOrProd(devStuff, prodStuff) {
    return env && env.production ? prodStuff : devStuff;
  }
};
