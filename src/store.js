import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    explanation: true,
    selectedTag: 'all'
  },
  mutations: {
    TOGGLE_EXPLANATION(state) {
      state.explanation = !state.explanation
    },
    SET_TAG(state, tag) {
      state.selectedTag = tag
    }
  },
  actions: {
  },
  getters: {
    getExplanation: state => {
      return state.explanation
    },
    getSelectedTag: state => {
      return state.selectedTag
    }
  }
})
