process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('./overrides/webpack-config');
require('@bentley/react-scripts/scripts/start');