import Vue from 'vue'
import Vuex from 'vuex'

import catalogModule from './modules/catalog'
import basketModule from './modules/basket'

Vue.use(Vuex)

export function getDefaultStore () {
  return {
    modules: {
      catalog: catalogModule,
      basket: basketModule
    }
  }
}

export default new Vuex.Store(getDefaultStore())
