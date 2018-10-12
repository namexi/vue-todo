const Koa = require('koa')

const app = new Koa()
// 环境
const isDev = process.env.NODE_ENV === 'development'

// 中间件级联
app.use(async (ctx,next) => {
  // 抓取错误
try {
  console.log(ctx.path)
  await next() // 没有错误就停止
} catch (error) {
  console.log(err)
  ctx.status = 500 // 指定错误码 "internal server error"
  if (isDev) {  // 根据环境返回错误消息
    ctx.body = error.message
  }else {
    ctx.body = '稍后再试'
  }
}
})


