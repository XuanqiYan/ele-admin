import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default (app) => {
  // app.use 使用一个插件 app.components()注册一个全局组件
  app.use(ElementPlus)
}
