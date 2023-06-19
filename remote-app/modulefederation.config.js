const { dependencies } = require('./package.json');

module.exports = {
  name: 'remote',
  exposes: {
    './RemoteComponent': './src/RemoteComponent/RemoteComponent',
    './mfe1': './src/mfe1/RemoteComponentContainer',
    './mfe2': './src/mfe2/RemoteComponentContainer2',
  },
  filename: 'remoteEntry.js',
  shared: {
    "react-redux": "^7.2.8",
    "redux": "^4.1.2",
    "redux-dynamic-modules": "^5.2.3",
    "redux-micro-frontend": "^1.3.0",
    "redux-dynamic-middlewares": "^2.2.0",
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