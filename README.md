# react-app-rewire-emotion
Add emotion/babel babel plugin to create-react-app using react-app-rewired

Add the `emotion/babel` to `create-react-app` app via [react-app-rewired](https://github.com/timarney/react-app-rewired)

## Installation
```
yarn add --dev react-app-rewire-emotion
```

## Usage
In the `config-overrides.js` you created for `react-app-rewired` add this code:

```
const rewireEmotion = require('react-app-rewire-emotion');

/* config-overrides.js */
module.exports = function override(config, env) {
  return rewireEmotion(config, env, { inline: });
}
```

## Usage with Storybook
When using `@storybooks/storybook` with CRA via `getstorybook`, create a `webpack.config.js` file in `.storybook` folder and add this code:

```
const rewireEmotion = require('react-app-rewire-emotion');

module.exports = function override(config, env) {
  return rewireEmotion(config, env, { inline: });
};
```

## Inspirations
[react-app-rewire-styled-components](https://github.com/withspectrum/react-app-rewire-styled-components) by @mxstbr

## License
Licensed under MIT License, Copyright @ 2017 osdevisnot. See [LICENSE.md](LICENSE.md) for more details.
