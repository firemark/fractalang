const path = require('path');
const {config, envs} = require('./webpack.config.base.js');

module.exports = Object.assign(config, {
  entry: './src/web/docs.ts',
  output: {
    filename: 'tut.js',
    path: path.resolve(__dirname, 'docs', '_static'),
    library: 'TUT',
    publicPath: envs.ASSET_PATH,
  },
});
