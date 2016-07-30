var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    // your code's enrty:
    './src/main.jsx'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  resolve: {
    root: [
      path.join(__dirname, 'src')
    ],
    extensions: ['', '.js', '.jsx','css', '.scss']
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?sourceMap'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
    }, {
      test: /\.(jpe?g|JPE?G|png|PNG|gif|GIF|svg|SVG|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1024&name=[sha512:hash:base64:7].[ext]'
    }]
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]
};
