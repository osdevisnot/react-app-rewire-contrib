const path = require('path');

const rewireReactLibrary = (config, env, options, overrideConfig = false) => {
  if (String(overrideConfig).toLowerCase() === 'true') {
    /**
     * Determine Library Name based on package name
     * basename will omit scope name from npm scoped packages
     */
    const libraryName = path.basename(options.name);
    /**
     * Read the entry and output filename from package.json's module and main properties
     * Why? Read here: https://github.com/dherman/defense-of-dot-js/blob/master/proposal.md#typical-usage
     */
    const entryFile = options.module;
    const outFile = path.basename(options.main);
    const outDir = options.main.replace(outFile, '');
    /**
     * add library configurations to webpack config
     */
    config.output.library = libraryName;
    config.output.libraryTarget = 'commonjs';
    /**
     * Change the webpack entry and output path
     */
    config.entry = { [libraryName]: path.resolve(entryFile) };
    config.output.filename = outFile;
    config.output.path = path.resolve(outDir);
    /**
     * Add all package dependencies as externals as commonjs externals
     */
    let externals = {};
    Object.keys(options.dependencies).forEach(key => {
      externals[key] = `commonjs ${key}`;
    });
    config.externals = externals;
    /**
    * Clear all plugins from CRA webpack config
    */
    config.plugins = [];
  }

  console.log('==> config : ', config);
  return config;
};

module.exports = rewireReactLibrary;
