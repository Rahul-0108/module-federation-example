const { ModuleFederationPlugin } = require('webpack').container;
//const FederatedTypesPlugin = require('@module-federation/typescript');
const webpackConfigPath = '@bentley/react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

const override = config => {
  config.plugins.push(new ModuleFederationPlugin(require('../../modulefederation.config.js')));
  //config.plugins.push(new FederatedTypesPlugin());
  config.output.publicPath = 'auto';

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = env => override(webpackConfig(env));

module.exports = require(webpackConfigPath);