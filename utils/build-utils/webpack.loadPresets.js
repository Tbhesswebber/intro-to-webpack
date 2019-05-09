// === import modules ===
const webpackMerge = require('webpack-merge');

// ? creates a flattened dynamic webpack config that will then be merged into the main webpack config
module.exports = env => {
  const { presets } = env;

  // create a default empty array and populate it with any comma-delimited presets
  const mergedPresets = [].concat(...[presets.split(',')]);

  // for each preset...
  const mergedConfigs = mergedPresets.map(
    // dynamically import the preset and pass env to the exported function
    preset => (preset ? require(`./presets/webpack.${preset}.js`)(env) : {})
  );

  return webpackMerge({}, ...mergedConfigs);
};
