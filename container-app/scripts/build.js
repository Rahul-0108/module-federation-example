process.env.NODE_ENV = 'production';
require('./overrides/webpack-config');
require('@bentley/react-scripts/scripts/build');