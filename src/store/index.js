import Vue from 'vue'
import Vuex from 'vuex'
import categories from './modules/categories'
import Posts from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    categories,
    Posts
  },
})
