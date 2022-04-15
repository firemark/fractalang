const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const {config, envs} = require('./webpack.config.base.js');

module.exports = Object.assign(config, {
  entry: './src/web/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ASSET_PATH,
  },
  devServer: {
    port: 9000,
  },
  plugins: config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
    new CopyWebpackPlugin({
        patterns: [
            { from: 'public' }
        ],
    }),
    new HtmlWebpackPlugin({
      title: 'Fractalang',
      template: path.resolve(__dirname, 'src', 'web', 'index.html'),
    }),
  ]),
});
