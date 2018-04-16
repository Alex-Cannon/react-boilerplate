import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const hostname = 'localhost';
const port = 8081;
const webpackBase = 'http://' + hostname + ':' + port;

const config = {
  mode: process.env.NODE_ENV,
  entry: './app/client.jsx',
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: webpackBase + '/',
    filename: 'dev-bundle.js'
  },
  module: {
    rules: [
      { // React -> JS, ES6 -> ES5
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { // SCSS -> CSS in JS bundle
        test: /\.s?css$/i,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, '../app')]
          }
        }]
      },
      { // Assets -> JS bundle
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: path.resolve(__dirname, '../app/assets'),
        use: ['file-loader']
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        WEBPACK: JSON.stringify(true),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  target: "node"
}

const compiler = webpack(config);
const options = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  }
}
const webpackDevServer = new WebpackDevServer(compiler, options);

webpackDevServer.listen(port, hostname, () => {
  console.info('Webpack serving updates at ' + webpackBase + ', remember to build before pushing.');
});


