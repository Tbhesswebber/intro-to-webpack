const path = require('path');
const DistCleaner = require('clean-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin: HMR } = require('webpack');

module.exports = ({ mode }) => {
  return {
    context: path.resolve(__dirname),
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'main.bundle.js',
    },
    mode,
    plugins: [new DistCleaner(), new HTMLPlugin({ template: 'src/index.template.html' }), new HMR()],
    module: {
      rules: [
        { test: /\.jsx?$/, use: ['babel-loader'] },
        { test: /\.css$/, use: ['style-loader', { loader: 'css-loader', options: { modules: false } }] },
      ],
    },
    devServer: {
      port: 8888,
      hot: true,
    },
    resolve: { alias: { 'react-dom': '@hot-loader/react-dom' } },
  };
};
