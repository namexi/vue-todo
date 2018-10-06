const path = require('path')

const config = {
  target: 'web',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude:/node_modules/
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader:'url-loader?limit=1024&name=[name].[ext]'
          }
        ]
      }
    ]
  }
}

module.exports = config

