const path = require('path')
const fs = require('fs')
const Router = require('koa-router')
const axios = require('axios')
const MeFs = require('memory-fs')
const webpacke = require('webpacke')
const VueServerRenderer = require('vue-server-renderer')
const serverConfig = require('../../build/webpack.config.server')

const severCompiler = webpacke(serverConfig) // 编译serverconfig在node环境中运行
const fs = new MeFs()
severCompiler.outputFileSystem = fs  // 将出口文件目录交给fs模块处理

// 记录每次打包生产的文件
let build
// 监视webpage运行
severCompiler.watch({},(err,status) => {
  if (err) throw err
  status = status.toJson()
  // 转成Json格式文件 处理打包文件中的错误警告
  status.erros.forEach(err => console.log(err))
  status.hasWarnings.forEach(warn => console.warn(err))
  //指定输出路径 (node直接读取)
  const buildPath = path.join(serverConfig.output.path,'vue-ssr-server-bundle.json')  //  获取服务的渲染的JSon文件路径
  //  每次编译 都会获取到渲染文件
  builfd = JSON.parse(mfs.readFileSync(buildPath,'utf-8')) // 将渲染文件读取成JSON格式文件
})

// 异步处理 渲染文件获取 异常信息 和逻辑
 const ssr = async ctx => {
  if(!build) {
    // 不存在 直接 返回
    ctx.body = '请耐心等待...'
    return
  }
  // 此处处理获取到渲染文件后的逻辑
  const temp = fs.readFileSync(path.join(__dirname,'../tempalte.ejs'))  // 模板文件
  // 获取webpa打包JS文件
  const clientMainfestResp = await axios.get('http://127.0.0.1:8000/public/vue-ssr-client-manifest.json') //同步获取
  const clientMainfest = clientMainfestResp.data   // 拿到文件数据
  // ssr渲染成HTML字符串
  const renderer = VueServerRenderer.createBundleRenderer(builfd,{
    inject:false,   // 不允许注入模板
    clientMainfest
  })

  // 注入到 模板中
 }
