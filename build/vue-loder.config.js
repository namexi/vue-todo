module.exports = isDev => {
    return {
        presreveWhitepace:true,
        extractCSS:!isDev  //非开发环境 同意打包组件中的CSS到CSS文件中
    }
}