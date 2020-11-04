/**
 * Created by glenn on 15.10.18.
 */

const path = require('path');
const webpack = require('webpack');
const Memoryfs = require('memory-fs');

module.exports = (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: path.resolve(__dirname, '../'),
          },
        },
      ],
    },
  });

  compiler.outputFileSystem = new Memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        reject(err);
      }

      resolve(stats);
    });
  });
};
