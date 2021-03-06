var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: './assets/src/index',

  output: {
    path: path.resolve('./assets/bundles/'),
    filename: "[name].bundle.js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['react']}},
    ],
  },

  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".jsx", ".css"]
  },
}