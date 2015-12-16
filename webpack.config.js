var path = require('path'),
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
    },{
      test: /\.scss$/,
      loader: 'style!css!sass'
    },{
      test: /\.png$/,
      loader: "url-loader?limit=100000"
    },{
      test: /\.jpg$/,
      loader: "file-loader"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'css', 'sass', 'scss', 'png', 'jpeg']
  },
  output: {
    path: contentBase,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase
  }
}

module.exports = config;
