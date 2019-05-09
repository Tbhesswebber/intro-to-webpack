// === import dependencies ===
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// === import local dependencies ===
const loadPresets = require('./utils/build-utils/webpack.loadPresets.js');
// import environment-based webpack config to merge with this default configuration
const modeConfig = env => require(`./utils/build-utils/webpack.${env}.js`)(env); // eslint-disable-line

// === set paths for local environment ===
const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/dist');

// dynamically creates webpack config based on CLI args
// @see utils/build-utils/presets/ for possible presets (i.e. sub-configurations)
module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  const config = webpackMerge(
    {
      mode,
      entry: `${SRC_DIR}/index.js`,
      output: {
        filename: 'index.bundle.js',
        path: DIST_DIR,
      },
      module: {
        rules: [
          {
            test: /\.jsx?/,
            include: SRC_DIR,
            use: 'babel-loader',
            resolve: { extensions: ['.js', '.jsx'] },
          },
          {
            test: /\.css/,
            include: SRC_DIR,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
      plugins: [new HtmlWebpackPlugin({ template: `${SRC_DIR}/index.html` }), new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    loadPresets({ mode, presets })
  );
  return config;
};
