
const path = require('path');

module.exports = {
  entry: './components/App.react.js',
  resolve: {
    extensions: ['.js', '.react.js', '.json'],
    /*modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, './components'),
    ],*/
  },
  output: {
    path: __dirname,
    filename: './App.js'
  },
  module: {
    rules: [
      {
        test: /\.react.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
};
