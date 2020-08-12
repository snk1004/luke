/* eslint-disable camelcase */
// vue.config.js
// eslint-disable-next-line no-unused-vars
const path = require('path')
// eslint-disable-next-line no-unused-vars
const debug = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')

let env = process.argv[4]
console.log(process.argv)
console.log('Welcome To My World')
console.log(process.argv[4])
// 如果不携带参数则默认prod生产环境
if (['dev', 'beta', 'prod'].indexOf(env) < 0) {
  env = 'prod'
}
let api_root = '' // 网址名称
let baseURI = '' // CDN路径
switch (process.argv[4]) {
  case undefined || 'undefined':
    api_root = 'http://www.baidu.com/'
    baseURI = 'http://www.baidu.com/'
    break
  case 'dev':
    api_root = 'http://www.baidu.com/'
    baseURI = 'http://www.baidu.com/'
    break
  case 'beta':
    api_root = 'http://www.baidu.com/'
    baseURI = 'http://www.baidu.com/'
    break
  case 'prod':
    api_root = 'http://www.baidu.com/'
    baseURI = 'http://www.baidu.com/'
    break
  default:
    break
}

// 插件用于在全局获取路径或其他
var definePlugin = new webpack.DefinePlugin({
  API_ROOT: JSON.stringify(api_root)
})
module.exports = {
  publicPath: baseURI, // 根域上下文目录，原baseURI
  outputDir: env, // 构建输出目录
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: true, // 运行时版本是否需要编译
  transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  css: { // 配置高于chainWebpack中关于css loader的配置
    // modules: true, // 是否开启支持‘foo.module.css’样式
    // extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
    sourceMap: false, // 是否在构建样式地图，false将提高构建速度
    loaderOptions: { // css预设器配置项

    }
  },
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  pluginOptions: { // 第三方插件配置
    definePlugin
  },
  pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8088,
    https: false,
    hotOnly: false,
    proxy: null,
    // proxy: {
    //     '/api': {
    //         target: '<url>',
    //         ws: true,
    //         changOrigin: true
    //     }
    // },
    before: app => {}
  }
}
