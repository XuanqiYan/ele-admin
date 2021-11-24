// 集中暴露vuex 各个模块需要暴露的属性和方法
import variables from '@/styles/variables.scss'
export default {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: (state) => variables,
  sideBarOpen: (state) => state.app.sideBarOpened
}
