# react-app-rewire-styled
Add styled-components babel plugin to create-react-app using react-app-rewired

Add the `styled-components` to `create-react-app` app via [react-app-rewired](https://github.com/timarney/react-app-rewired)

## Installation
```
yarn add --dev react-app-rewire-styled
```
OR
```
npm install --save-dev react-app-rewire-styled
```

## Usage
In the `config-overrides.js` you created for `react-app-rewired` add this code:

```
const rewireStyled = require('react-app-rewire-styled');

/* config-overrides.js */
module.exports = function override(config, env) {
  return rewireStyled(config, env, { inline: true });
}
```

## Usage with Storybook
When using `@storybooks/storybook` with CRA via `getstorybook`, create a `webpack.config.js` file in `.storybook` folder and add this code:

```
const rewireStyled = require('react-app-rewire-styled');

module.exports = function override(config, env) {
  return rewireStyled(config, env, { inline: true });
};
```

## Inspirations
[react-app-rewire-styled-components](https://github.com/withspectrum/react-app-rewire-styled-components) by @mxstbr

## License
Licensed under MIT License, Copyright @ 2017 osdevisnot. See [LICENSE.md](LICENSE.md) for more details.
