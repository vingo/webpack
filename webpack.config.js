module.exports = {
  entry: './entry.js',
  output: {
    path: './bin', //__driname
    publicPath: 'http://mycdn.com/', // This is used to generate URLs to e.g. images
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.coffee$/,
      loader: 'coffee-loader'
    }]

  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee']
  }

};