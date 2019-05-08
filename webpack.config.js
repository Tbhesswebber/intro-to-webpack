const path = require('path');
const DistCleaner = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  plugins: [new DistCleaner()],
};
