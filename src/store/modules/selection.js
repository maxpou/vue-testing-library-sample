import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  mySelection: state => state.all
}

// actions
const actions = {
}

// mutations
const mutations = {
  [types.ADD_TO_SELECTION] (state, { starship }) {
    state.all.push(starship)
  },
  [types.REMOVE_FROM_SELECTION] (state, { starship }) {
    state.all.splice(state.all.indexOf(starship), 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
