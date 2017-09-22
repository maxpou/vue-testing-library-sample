import selectionStore from '@/store/modules/selection'
import swapiResponse from '../../api/swapi.response.json'

describe('selection store - getters', () => {
  it('return my selection', () => {
    const state = {
      all: swapiResponse.results.filter(starship => {
        return starship.name === 'Death Star' || starship.name === 'X-wing'
      })
    }

    const result = selectionStore.getters.mySelection(state)
    expect(result).toEqual(state.all)
  })
})

describe('selection store - mutations', () => {
  it('ADD_TO_SELECTION', () => {
    const state = {
      all: swapiResponse.results.filter(starship => {
        return starship.name === 'Death Star' || starship.name === 'X-wing'
      })
    }
    const itemToAdd = swapiResponse.results.filter(starship => {
      return starship.name === 'Millennium Falcon'
    })

    selectionStore.mutations.ADD_TO_SELECTION(state, { starship: itemToAdd })
    expect(state.all.length).toEqual(3)
  })

  it('REMOVE_FROM_SELECTION', () => {
    const state = {
      all: swapiResponse.results.filter(starship => {
        return starship.name === 'Death Star' || starship.name === 'X-wing' || starship.name === 'Millennium Falcon'
      })
    }
    const itemToRemove = state.all[1]

    selectionStore.mutations.REMOVE_FROM_SELECTION(state, { data: itemToRemove })
    expect(state.all.length).toEqual(2)
  })
})
