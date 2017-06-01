const path = require('path');

module.exports = {
  entry: {
    '01_javascript': './test/javascript.js',
    '02_advanced': './test/advanced.js',
    '03_es6': './test/es6.js',
  },
  output: {
    filename: '[name].spec.js',
    path: path.join(__dirname, 'test/dist')
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_module/ },
      { test: /sinon\/pkg\/sinon\.js/, loader: 'imports?define=>false,require=>false' }
    ]
  },
  resolve : {
    alias: {
      sinon: 'sinon/pkg/sinon',
    },
  }
};