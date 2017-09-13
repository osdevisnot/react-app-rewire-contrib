const { injectBabelPlugin } = require('react-app-rewired');

function rewireStyled(config, env, styledComponentsBabelOptions = {}) {
  config = injectBabelPlugin(['styled-components', styledComponentsBabelOptions], config);
  return config;
}

module.exports = rewireStyled;
