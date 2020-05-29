import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  items: []
}

// getters
const getters = {
  basketStarships: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const starship = rootState.catalog.starships.find(s => s.id === id)
      return {
        name: starship.name,
        cost_in_credits: starship.cost_in_credits,
        subTotal: starship.cost_in_credits * quantity,
        quantity
      }
    })
  },
  basketTotalPrice: (state, getters) => {
    return getters.basketStarships.reduce((total, basketItem) => {
      return total + basketItem.cost_in_credits * basketItem.quantity
    }, 0)
  },
  basketSize (state) {
    return state.items.reduce((accumulator, current) => accumulator + current.quantity, 0)
  }
}

// actions
const actions = {
  addStarshipToBasket ({ state, commit }, starship) {
    const basketItem = state.items.find(item => item.id === starship.id)
    if (!basketItem) {
      commit(types.ADD_TO_BASKET, { id: starship.id })
    } else {
      commit(types.INCREMENT_BASKET_ITEM, basketItem)
    }
  }
}

// mutations
const mutations = {
  [types.ADD_TO_BASKET] (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  [types.INCREMENT_BASKET_ITEM] (state, { id }) {
    const starshipItem = state.items.find(item => item.id === id)
    starshipItem.quantity++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
