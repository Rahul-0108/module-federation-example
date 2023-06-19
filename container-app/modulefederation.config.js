const { dependencies } = require('./package.json');

module.exports = {
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:3005/remoteEntry.js',
  },
  shared: {
    ...dependencies,
    react: {
      eager: true,
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      eager: true,
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};