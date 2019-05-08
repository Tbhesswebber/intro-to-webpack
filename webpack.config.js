const getConfig = mode => require(`./webpack.${mode}.js`);

module.exports = env => {
  const { mode } = env;
  return getConfig(mode)(env);
};
