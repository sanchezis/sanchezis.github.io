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
      "zlib": false,
      "async_hooks": false,
      "path": false,
      "tls": false,
      "net": false,
      "os": false,
      "crypto": false,
      "buffer": false,
      "fs": false,
      "stream": false,
      "url": false,
      "util": false,
      "dns": false,
      "child_process": false,
      "http": false,
      "https": false,
      "querystring": false,
    }
  }
};