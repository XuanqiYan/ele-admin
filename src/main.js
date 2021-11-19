import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

// 引入样式的主入口文件
import './styles/index.scss'

// 加载svg 的处理
import initSvgIcon from './icons/index.js'

// 用户鉴权
import './permission.js'

const app = createApp(App)
installElementPlus(app)
initSvgIcon(app)
app.use(store).use(router).mount('#app')
/*eslint-disable*/

// 入口 main.js（导入模块：js模块） --> webpack   出口/js/app.js 文件

// 【css，文件 ，字体，svg】 --> loader --> 对应的js模块    --> webpack

// 默认不需要配置 ，直接使用，因为项目环境已经直接配置了 常见的loader

/*
  svg  导入后 
    1.是由 file-loader 变成一个 /img/user.8d030327.svg js 模块
    2.可以按照img方式加载
      缺点:
        file-loader 转化的js模块不能动态修改一个图片的颜色不  
        不利于封装一个全局组件 

*/

/* 
  查看webpack 的默认配置  ？？
    vue inspect 查 看默认的webpack配置
    vue inspect --rules 查看所有的loader
    vue inspect --rule  svg  

  如何配置webpack 
    1. 项目根目录创建 vue.config.js
    2. 修改webapck 的配置
      a） 禁用 file-laoder 对某个目录下svg的解析 
      b） 下载loader 
        npm install -D svg-sprite-loader  // -D 保存在devlopment 依赖中 
        配置


*/
/*
  退出业务：
    １.token 的作用
      a) token 是由后台再首次登录的时候生成，通过response 响应给前端 
        意思是说一个token 同时再前后端都有保存
      b) token 表示用户的身份，是一个用户的令牌，对于服务器而言，只认token不认人，
        意思说别人获取你的　token，以你的身份就能登录服务器，获取你的敏感数据
        所以处于安全角度，需要对token进行一些安全策略的处理　
          常见的处理方式：
            动态　token
            时效　token　（使用）
            刷新　token
            ．．．
    ２.常见的退出方式：
        主动退出：用户手动点击退出按钮，执行退出登录　（前端处理）
        被动退出：
          token失效：（超出了token有效期，失去服务器对用户校验身份的条件）
            １　前端获取的token过期　（前端处理）
            ２　后端生成的token过期　（后端处理）　　
          单点登录：　　　　　　　　　（后端处理）　　　　　　　　　　
            在你已经登录的情况下，你或者是别人再别的设备上再次登录。
            你当前的登录状态会被顶下来

      总结：
        １.　前端只能处理主动退出和　前端token失效
            也是要你执行前的退出操作　  
        ２.　如果是后端token失效　和　单端登录
            以’特定‘的状态码通知前端
              ｃｏｄｅ　４０１　后台token失效
              ｃｏｄｅ　４０５　单点登录　
            也是要你执行前的退出操作　

    ３.　退出登录操作逻辑　
        １.清理掉用户的缓存数据　token userinfo ...
        ２.清理该用户的权限　        
        ３.返回到登陆页面
    ４. 主动退出(前端)

    5. token 失效(前端 )
      1.用户登录获得到token 的时候记录时间 
      2.指定token 生效时间2小时
      3.再调用接口的时候 需要带token ，需要判断这个token时候再有效期之内 

    6. token 失效（后端）和 单点登录 
      后台会返回特定的状态码   执行退出
      
*/

/* eslint-enable */
