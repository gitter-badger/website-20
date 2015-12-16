var path = require('path'),
    webpack = require('webpack'),
    node_modules = path.resolve(__dirname, 'node_modules'),
    contentBase = path.resolve(__dirname, 'dist');

var config = {
  entry: [
    path.resolve(__dirname, 'src', 'client', 'core.jsx')
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [node_modules],
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: contentBase,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = config;
