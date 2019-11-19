const {resolve, join} = require('path');
const webpack = require('webpack');

const IS_DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  target: 'web',
  entry: ['./src/client/index.jsx'],
  output: {
    publicPath: '/',
    path: resolve(__dirname, '..', 'build', 'client'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
  resolve: {
    modules: ['node_modules', join('src', 'client')],
    extensions: ['.js', '.jsx']
  },
  stats: {
    assetsSort: '!size',
    children: false,
    chunks: false,
    colors: true,
    entrypoints: false,
    modules: false
  }
};
