const { injectBabelPlugin } = require('react-app-rewired');

function rewireEmotion(config, env, emotionBabelOptions = {}) {
  config = injectBabelPlugin(['emotion/babel', emotionBabelOptions], config);
  return config;
}

module.exports = rewireEmotion;
