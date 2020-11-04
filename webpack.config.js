/**
 * Created by glenn on 01.06.16.
 * Last updated on 04.11.20.
 */

const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HelloWorldPlugin = require('./hello-world-plugin');

module.exports = (env) => {
  const config = {
    mode: eitherDevOrProd('development', 'production'),
    entry: './demo/src/index.js',
    output: {
      filename: eitherDevOrProd('[name].js', '[name].[contenthash].js'),
      path: path.resolve(__dirname, 'demo/dist'),
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              // https://webpack.js.org/loaders/babel-loader
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
            {
              loader: path.resolve('./'),
            },
          ],
        },
        {
          test: /\.html$/,
          use: 'html-loader',
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),

      // Output Management
      // https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin
      // https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
      // Development
      // https://webpack.js.org/guides/development/#using-watch-mode
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackPlugin({
        template: './demo/src/index.tpl.html',
        favicon: './demo/src/favicon.ico',
      }),

      new HelloWorldPlugin(),
    ],
    optimization: {
      // Caching
      // https://webpack.js.org/guides/caching/#extracting-boilerplate
      runtimeChunk: 'single',
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'demo/dist'),
      compress: true,
      noInfo: false,
      historyApiFallback: true,
      https: true,
      hot: true,
      publicPath: '/',
    },
    // Persistent Caching
    // https://webpack.js.org/blog/2020-10-10-webpack-5-release/#persistent-caching
    cache: {
      // 1. Set cache type to filesystem
      type: 'filesystem',

      buildDependencies: {
        // 2. Add your config as buildDependency to get cache invalidation on config change
        config: [__filename],

        // 3. If you have other things the build depends on you can add them here
        // Note that webpack, loaders and all modules referenced from your config are automatically added
      },
    },
  };

  return config;

  // Production
  // https://webpack.js.org/guides/production/#specify-the-mode
  function eitherDevOrProd(devStuff, prodStuff) {
    return !(env && env.production) ? devStuff : prodStuff;
  }
};
