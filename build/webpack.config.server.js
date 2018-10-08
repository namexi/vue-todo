const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base.js')
const VueServerPlugin = require('vue-server-renderer/server-plugin')

const isDev = process.env.NODE_ENV === 'development'

const defaultPluins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  })
]

let config
config = merge(baseConfig,{
  target: 'node',  //指定打包运行环境
  entry: path.join(__dirname, '../src/server.js'), // 指定入口
  devtool: 'source-map',  // 指定 指引出错 插件
  output: {
    libraryTarget: 'commonjs2',   // 指定 出口文件 规范
    filename: 'server.js',
    path: path.join(__dirname, '../server/build') // 指定 出口路径
  },
  externals: Object.keys(require('../package.json').dependencies), // 排除打包package中生产环境中的文件
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ExtractPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins:[
  new ExtractPlugin('styles.[contentHash:8].css'),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      VUE_ENV: "server"
    }
  }),
  new VueServerPlugin()
  ]
})

module.exports = config
