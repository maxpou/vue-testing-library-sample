import Vue from 'vue'
import Vuex from 'vuex'

import catalogModule from './modules/catalog'
import basketModule from './modules/basket'

Vue.use(Vuex)

const getCatalog = () => catalogModule
const getBasket = () => basketModule

export function getDefaultStore () {
  return {
    modules: {
      catalog: getCatalog(),
      basket: getBasket()
    }
  }
}

export default new Vuex.Store(getDefaultStore())
