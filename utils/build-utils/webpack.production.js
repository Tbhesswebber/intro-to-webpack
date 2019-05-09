// ? creates an environment-oriented webpack config
module.exports = env => ({
  output: {
    chunkFilename: '[name].bundle.js',
  },
});
