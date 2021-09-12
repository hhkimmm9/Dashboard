import Vue from 'vue'
import Vuex from 'vuex'

import userInfo from './modules/userInfo'
import todos from './modules/todos'
import posts from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    userInfo,
    todos,
    posts,
  },
})
