const { injectBabelPlugin } = require('react-app-rewired');

function rewireEmotion(config, env) {
  config = injectBabelPlugin('emotion/babel', config);
  return config;
}

module.exports = rewireEmotion;
