const path = require('path');

module.exports = {
  entry: {
      app: './src/main.jsx',
  }, 
  output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      filename: './src/main.jsx',
  },
};