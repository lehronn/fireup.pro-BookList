//modules import
const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
      OptimizeJSPlugin = require('optimize-js-plugin');

//enviroment variable
let env = process.env.NODE_ENV || 'development';

if (env === 'production') {
plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  );
}

console.log('NODE_ENV:', env);

//plugins configuration
let plugins = [
new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body',
    })
];

//webpack configuration
module.exports = {
  entry: [
          'react-hot-loader/patch',
          './src/index.js'
          ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins
};