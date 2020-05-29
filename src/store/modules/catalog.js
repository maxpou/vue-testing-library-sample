import * as swapi from '../../services/swapi.api'
import { formatStarship } from '../../services/dataFormatter'
import * as types from '../mutation-types'

// initial state
const state = {
  starships: [],
  currentPage: 0,
  fullyLoaded: false
}

// getters
const getters = {
}

// actions
const actions = {
  async loadMoreStarships ({ commit }) {
    const response = await swapi.getStarships(state.currentPage + 1)
    commit(types.RECEIVE_STARSHIPS, { response: response.data })
    commit(types.INCREMENT_PAGE)
  }
}

// mutations
const mutations = {
  [types.RECEIVE_STARSHIPS] (state, { response }) {
    const formattedStarships = response.results.map(formatStarship)
    state.starships = [...state.starships, ...formattedStarships]
    state.fullyLoaded = response.next === null
  },
  [types.INCREMENT_PAGE] (state) {
    state.currentPage++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
