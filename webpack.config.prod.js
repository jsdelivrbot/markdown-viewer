const webpack = require('webpack')
const path = require('path')

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  entry: {
    main: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'styles')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },

      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        loaders: [
          'style',
          'css?sourceMap',
          'sass?sourceMap'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
