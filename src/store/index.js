import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import starships from './modules/starships'
import selection from './modules/selection'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  actions,
  modules: {
    starships,
    selection
  },
  strict: debug
})

/* istanbul ignore if */
if (module.hot) {
  module.hot.accept([
    './modules/starships'
  ], () => {
    const starships = require('./modules/starships').default
    const selection = require('./modules/selection').default
    store.hotUpdate({
      modules: {
        starships,
        selection
      }
    })
  })
}

export default store
