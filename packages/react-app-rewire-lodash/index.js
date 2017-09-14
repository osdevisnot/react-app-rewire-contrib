const { injectBabelPlugin } = require('react-app-rewired');

function rewireLodash(config, env, lodashBabelOptions = {}) {
  config = injectBabelPlugin(['lodash', lodashBabelOptions], config);
  return config;
}

module.exports = rewireLodash;
