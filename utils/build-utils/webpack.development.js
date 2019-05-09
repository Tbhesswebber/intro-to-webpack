// ? creates an environment oriented webpack config
module.exports = env => ({
  // use cheap-module-eval style source maps - aka lines only
  devtool: 'cheap-module-eval-source-map',
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  },
});
