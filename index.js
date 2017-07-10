function rewireEmotion(config, env, emotionBabelOptions = {}) {
  const babelLoader = config.module.rules.find(rule => rule.loader && rule.loader.indexOf('babel-loader') > 0);
  babelLoader.options.plugins = (babelLoader.options.plugins || []).concat([['emotion/babel', emotionBabelOptions]]);
  return config;
}

module.exports = rewireEmotion;
