const path = require('path');

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),

  node_modules: path.resolve(__dirname, 'node_modules'),

  // Alias
  alias: {
    components: path.resolve(__dirname, '../src/components/'),
    containers: path.resolve(__dirname, '../src/containers/'),
    assets: path.resolve(__dirname, '../src/assets/'),
    stories: path.resolve(__dirname, '../src/stories/'),
    layout: path.resolve(__dirname, '../src/layout/'),
    styles: path.resolve(__dirname, '../src/styles/'),
  },
};
