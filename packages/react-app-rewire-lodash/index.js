function rewireLodash(config, env, lodashBabelOptions = {}) {
  let babelLoader;

  const checkRule = rule => rule.loader && rule.loader.indexOf('babel-loader') > 0;

  config.module.rules.every(rule => {
    if (rule.oneOf) {
      babelLoader = rule.oneOf.find(checkRule);
    } else if (checkRule(rule)) {
      babelLoader = rule.loader;
    }
    return !babelLoader;
  });

  if (babelLoader && babelLoader.options) {
    babelLoader.options.plugins = (babelLoader.options.plugins || []).concat([['lodash', lodashBabelOptions]]);
  } else if (babelLoader && babelLoader.query) {
    babelLoader.query.plugins = (babelLoader.query.plugins || []).concat([['lodash', lodashBabelOptions]]);
  }
  return config;
}

module.exports = rewireLodash;
