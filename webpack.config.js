const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
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
            plugins: ['transform-object-rest-spread'],
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
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      App: path.resolve(__dirname, 'src/app/'),
      Utils: path.resolve(__dirname, 'src/utils/'),
      Store: path.resolve(__dirname, 'src/store/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
      Actions: path.resolve(__dirname, 'src/utils/actions/'),
      Reducers: path.resolve(__dirname, 'src/store/reducers/'),
      Services: path.resolve(__dirname, 'src/utils/services/'),
      Constants: path.resolve(__dirname, 'src/utils/constants/'),
      Factories: path.resolve(__dirname, 'src/utils/factories/'),
      Functions: path.resolve(__dirname, 'src/utils/functions/'),
      Components: path.resolve(__dirname, 'src/components/'),
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],

  devServer: {
    historyApiFallback: true,
    open: true,
    port: 4200,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },

  target: 'web',
}