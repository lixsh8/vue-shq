import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
  count: 1,
  foods: ['foods1', 'foods2']
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
