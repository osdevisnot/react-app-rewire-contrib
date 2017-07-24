function rewireEmotion(config, env, emotionBabelOptions = {}) {
  const babelLoader = config.module.rules.find(rule => rule.loader && rule.loader.indexOf('babel-loader') > 0);
  if (babelLoader && babelLoader.options && babelLoader.options.plugins) {
    babelLoader.options.plugins = (babelLoader.options.plugins || []).concat([['emotion/babel', emotionBabelOptions]]);
  } else if (babelLoader && babelLoader.query && babelLoader.query.plugins) {
    babelLoader.query.plugins = (babelLoader.query.plugins || []).concat([['emotion/babel', emotionBabelOptions]]);
  }
  return config;
}

module.exports = rewireEmotion;
