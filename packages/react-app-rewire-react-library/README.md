# react-app-rewire-react-library
Use create-react-app to build react libraries.

This gives you ability to reuse most of CRA setup for building your libraries.

> This package is spin off of [react-app-rewire-create-react-library](https://github.com/osdevisnot/react-app-rewire-create-react-library) in that it accepts all the [conventions](https://github.com/osdevisnot/react-app-rewire-create-react-library#conventions) through configuration options.

## Installation
```
yarn add --dev react-app-rewire-react-library

# or use npm if you don't have yarn yet

npm install --save-dev react-app-rewire-react-library
```

## Usage
In the `config-overrides.js` you created for [react-app-rewired](https://github.com/timarney/react-app-rewired) add this code:

```
const rewireCreateReactLibrary = require('react-app-rewire-react-library');

module.exports = function override(config, env) {
  config = rewireCreateReactLibrary(config, env);
  return config;
};
```

In `package.json`, add a separate npm script to build library

```
{
  "scripts": {
    ...
    "build-library": "react-app-rewired build --library",
    ...
  }
}
```

And you can now use CRA to build your library 💪

## Configurations

name: name of the library / package.
module: name of entry file for webpack.
main: output file for webpack config.
dependencies: list of dependencies to be added as externals to webpack config.

Although you can pass these options via configuration, it is usually recommended to package the package json config as is. For example:

```
const rewireReactLibrary = require('react-app-rewire-react-library');
const pkg = require('./package.json');

module.exports = function(config, env) {
  return rewireReactAppLibrary(config, env, pkg, process.env.ENCW_BUILD_LIB);
};
```

where package.json has below configurations:
```
{
  "module": "./src/module.js",
  "main": "./build/main.js",
  "dependencies": {
    "lodash": "4.17.4",
    "react": "15.6.1",
    "react-dom": "15.6.1"
  }
}
```

## Caveats

Setting `main` file to be outside of `build` folder would cause CRA to throw error when reporting file sizes. To avoid this, always set `"main"` to be inside `build` folder. For example:
```
# GOOD: uses build directory for output
"main": "build/my-library.js",

# BAD: uses dist directory for output
"main": "dist/my-library.js",
```

`public` folder always gets copied over to build even for library builds. This is currently handled and defaulted inside CRA, there is no way to override this at the moment. However, you can use `.npmignore` to avoid publishing these files to NPM:
```
# .npmignore

**
!build/*.js
!build/*.map
```

## License
Licensed under the MIT License, Copyright @ 2017 osdevisnot. See LICENSE.md for more information.
