import { createStore } from 'vuex'
import user from './modules/user.js'
import getters from './modules/getters'
import app from './modules/app.js'
import theme from './modules/theme.js'
export default createStore({
  getters,
  modules: {
    user,
    app,
    theme
  }
})
