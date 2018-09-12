const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['env', 'react'],
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Styles: path.resolve(__dirname, 'src/styles/'),
      Components: path.resolve(__dirname, 'src/components/'),
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],

  devServer: {
    open: true,
    hot: true,
    port: 4200,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },

  target: 'web',
}