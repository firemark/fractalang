const path = require('path');
const webpack = require('webpack');
const ASSET_PATH = process.env.ASSET_PATH || '';

module.exports = {
  envs: {ASSET_PATH},
  config: {
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.ts', '.js'],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
      }),
    ],
    devServer: {
      port: 9000,
    },
  },
};
