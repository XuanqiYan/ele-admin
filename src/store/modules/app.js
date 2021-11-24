import { LANGUAGR } from '@/common/common.js'
import { getItem, setItem } from '@/utils/storage.js'

const state = {
  sideBarOpened: true,
  language: getItem(LANGUAGR) || ''
}

const mutations = {
  toggleSideBar(state) {
    state.sideBarOpened = !state.sideBarOpened
  },
  setLanguage(state, lang) {
    setItem(LANGUAGR, lang)
    state.language = lang
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
