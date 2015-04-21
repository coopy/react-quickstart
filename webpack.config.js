// Thank you to Christian Alfoni:
// http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html
//
// This build does let Webpack minify vendor libraries, but since they are split off into their own
// bundle, webpack still rebuilds blazingly fast.

var webpack = require('webpack');
var nodeModulesDir = __dirname + '/node_modules';

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/main.js'],
    vendors: ['react']
  },
  resolve: {
    alias: {
      'react': nodeModulesDir + '/react/react.js'
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  output: {
    path: './build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'jsx-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
    ]
  }
};
