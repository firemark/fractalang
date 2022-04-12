const config = require('webpack.config.base');
const ASSET_PATH = process.env.ASSET_PATH || '';

module.exports = Object.assign(config, {
  entry: './src/web/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ASSET_PATH,
  },
});
