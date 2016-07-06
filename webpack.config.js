// webpack.config.js
'use strict';

module.exports = {

  entry : "./app/components/Main.js",

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 8000,
    contentBase: __dirname + '/public/',
    historyApiFallback: true
  },

  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel',
              exclude: /node_modules/,
              query: {
                  cacheDirectory: true,
                  presets: ['es2015', 'react']
              }
          }
      ]
  },

  devtool: 'source-map'
};