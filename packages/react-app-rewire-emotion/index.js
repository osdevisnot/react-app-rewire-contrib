const { injectBabelPlugin } = require('react-app-rewired');

function rewireEmotion(config, env, emotionBabelOptions = {}) {
  config = injectBabelPlugin(['emotion', emotionBabelOptions], config);
  return config;
}

function createEmotionRewire(emotionBabelOptions) {
  return function (config, env) {
    return rewireEmotion(config, env, emotionBabelOptions);
  };
}

module.exports.rewireEmotion = rewireEmotion;
module.exports.createEmotionRewire = createEmotionRewire;
