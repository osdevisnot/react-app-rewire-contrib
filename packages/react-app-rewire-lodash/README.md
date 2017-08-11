# react-app-rewire-lodash
Add lodash babel plugin to create-react-app using react-app-rewired

Add the `lodash` to `create-react-app` app via [react-app-rewired](https://github.com/timarney/react-app-rewired)

## Installation
```
yarn add --dev react-app-rewire-lodash
```

## Usage
In the `config-overrides.js` you created for `react-app-rewired` add this code:

```
const rewireLodash = require('react-app-rewire-lodash');

/* config-overrides.js */
module.exports = function override(config, env) {
  return rewireLodash(config, env, { ...babelPluginOptions });
}
```

## Usage with Storybook
When using `@storybooks/storybook` with CRA via `getstorybook`, create a `webpack.config.js` file in `.storybook` folder and add this code:

```
const rewireLodash = require('react-app-rewire-lodash');

module.exports = function override(config, env) {
  return rewireLodash(config, env, { ...babelPluginOptions });
};
```

## License
Licensed under MIT License, Copyright @ 2017 osdevisnot. See [LICENSE.md](LICENSE.md) for more details.
