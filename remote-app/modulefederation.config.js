const { dependencies } = require('./package.json');

module.exports = {
  name: 'remote',
  exposes: {
    './RemoteComponent': './src/RemoteComponent',
  },
  filename: 'remoteEntry.js',
  shared: {
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
    "@itwin/itwinui-react": {
      singleton: true,
      requiredVersion: dependencies["@itwin/itwinui-react"]
    },
  },
};