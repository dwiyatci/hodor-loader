/**
 * Created by glenn on 01/06/16.
 */

const join              = require('path').join;
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    devtool  : 'eval',
    resolve  : {
      extensions: ['', '.js', '.html'],
    },
    entry    : './demo/src/app.js',
    output   : {
      path    : join(__dirname, 'demo'),
      filename: 'app.js',
    },
    plugins  : [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),

      new HtmlWebpackPlugin({
        template: './demo/src/index.tpl.html',
        favicon : './demo/src/favicon.ico',
        filename: 'index.html',
      }),

      new HelloWorldPlugin(),
    ],
    module   : {
      loaders: [
        {
          test   : /\.js$/,
          include: [
            join(__dirname, 'demo/src'),
          ],
          loader : './',
        },
      ],
    },
    devServer: {
      noInfo            : true,
      historyApiFallback: true,
    },
  },
  {
    devtool: 'source-map',
    entry  : './',
    output : {
      path         : join(__dirname, 'dist'),
      filename     : 'index.js',
      libraryTarget: 'commonjs2',
    },
    module : {
      loaders: [
        {
          include: [
            join(__dirname, 'index.js'),
          ],
          loader : 'babel',
          query  : {
            presets: ['es2015'],
          },
        },
      ],
    },
  },
];

function HelloWorldPlugin() {
}
HelloWorldPlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', function () {
    console.log('Hello World!');
  });
};
