const getConfig = title => require(`./webpack.${title}.js`);

module.exports = env => {
  const { mode } = env;
  return getConfig(mode)(env);
};
