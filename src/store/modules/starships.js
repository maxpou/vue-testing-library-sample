import * as swapi from '../../api/swapi'
import * as types from '../mutation-types'

// initial state
const state = {
  starships: [],
  currentPage: 1,
  itemCount: 0
}

// getters
const getters = {
  allStarships: state => state.starships,
  currentPage: state => state.currentPage,
  isFullyloaded: state => state.itemCount === state.starships.length
}

// actions
const actions = {
  loadStarships ({ commit }, page) {
    commit(types.CHANGE_PAGE, { page })
    swapi.getStarships(page).then(data => {
      commit(types.RECEIVE_STARSHIPS, { data })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_STARSHIPS] (state, { data }) {
    state.starships = state.starships.concat(data.results)
    state.itemCount = data.count
  },
  [types.CHANGE_PAGE] (state, { page }) {
    state.currentPage = page
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
