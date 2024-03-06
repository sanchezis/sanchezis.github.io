const path = require('path');

module.exports = {
  entry: {
      app: './src/App.jsx',
  }, 
  output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      filename: './src/App.jsx',
  },
  resolve: {
    fallback: { 
      "url": require.resolve("url/") ,
      util: require.resolve("util/")
    }
  }
};