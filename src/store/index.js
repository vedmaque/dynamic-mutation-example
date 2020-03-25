import Vue from 'vue'
import Vuex from 'vuex'
import headerModule from './header'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    header: headerModule
  }
})
