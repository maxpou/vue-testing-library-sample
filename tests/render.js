import { render as r } from '@testing-library/vue'
import { routes } from '../src/router'
import { getDefaultStore } from '../src/store'

export function render (ui) {
  const store = getDefaultStore()
  store.modules.basket.state.items = []
  store.modules.catalog.state.starships = []
  store.modules.catalog.state.currentPage = 0
  store.modules.catalog.state.fullyLoaded = false

  return r(
    ui,
    {
      routes,
      store
    }
  )
}
