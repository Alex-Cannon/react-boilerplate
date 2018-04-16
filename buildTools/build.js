const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.WEBPACK = true;

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, '../app/client.jsx'),
  output: {
    path: path.resolve(__dirname, '../public/js'),
    filename: 'main.js'
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }, {
            loader: 'sass-loader'
          }]
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        use: [{ // HERE, ALEX, HERE! USE EXTRACT-TEXT FOR THIS, MAN! Probably.
          loader: 'file-loader'
        }]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/main.css'),
    new webpack.DefinePlugin({
      'process.env': {
        WEBPACK: JSON.stringify(true),
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};

function handleResults (err, stats) {

  console.timeEnd('build');
}

webpack(config, handleResults);

console.log('building...');
console.time('build');