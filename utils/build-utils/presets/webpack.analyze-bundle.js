const { BundleAnalyzerPlugin: BundleAnalyzer } = require('webpack-bundle-analyzer');

module.exports = env => ({
  plugins: [new BundleAnalyzer()],
});
