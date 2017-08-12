function rewireEmotion(config, env, emotionBabelOptions = {}) {
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
    babelLoader.options.plugins = (babelLoader.options.plugins || []).concat([['emotion/babel', emotionBabelOptions]]);
  } else if (babelLoader && babelLoader.query) {
    babelLoader.query.plugins = (babelLoader.query.plugins || []).concat([['emotion/babel', emotionBabelOptions]]);
  }
  return config;
}

module.exports = rewireEmotion;
