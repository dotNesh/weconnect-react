/*
    ./webpack.config.js
*/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = process.env.PORT || 8080;

const DefinePlugin = new webpack.DefinePlugin({
  "process.env": {
    PORT: JSON.stringify(PORT),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
});

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
  title: 'Code Splitting'
});

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    historyApiFallback: true,
    port: PORT,
  },
  performance: { hints: false },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index_bundle.js'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    DefinePlugin
  ]
};
