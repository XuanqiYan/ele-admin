//node 加载的 commonjs
//导出一个配置对象 .作为webpack的配置
const path = require('path') // 导入node 一个默认模块  解析目录相关

function getPath(src) {
  //__dirname //当前文件的绝路路径
  return path.join(__dirname, src)
}

module.exports = {
  // 配置svg-sprite-loader 解析指定目录
  chainWebpack(config) {
    // config 就是webpack 默认的配置对象

    //1 . 获取webpack 对svg 的解析的loader,并且忽略指定目录
    config.module.rule('svg').exclude.add(getPath('src/icons/svg')).end()

    //2.配置新的loader 对svg的解析

    config.module
      .rule('icons') // 新增一个名字叫icons的rule规则
      .test(/\.svg$/) // 解析什么文件
      .include.add(getPath('src/icons/svg')) // 处理那个目录下
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  // 配置代理服务器
  devServer: {
    proxy: {
      // 只代理以api开头的网络请求
      '/api': {
        // 代理目的地址
        target: 'https://api.imooc-admin.lgdsunday.club',
        // 是否开启代理
        changeOrigin: true
      }
    }
  }
}
