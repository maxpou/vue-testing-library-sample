import starshipsStore from '@/store/modules/starships'
import swapiResponse from '../../api/swapi.response.json'
import { testAction } from '../../../custom/test-actions'

describe('starships store - getters', () => {
  it('return all starship', () => {
    const state = {
      starships: swapiResponse.results,
      currentPage: 1,
      itemCount: swapiResponse.count
    }

    const result = starshipsStore.getters.allStarships(state)
    expect(result).toEqual(state.starships)
  })

  it('return the current page', () => {
    const state = {
      starships: swapiResponse.results,
      currentPage: 1,
      itemCount: swapiResponse.count
    }

    const result = starshipsStore.getters.currentPage(state)
    expect(result).toEqual(1)
  })

  it('return fully loaded statement', () => {
    const state = {
      starships: swapiResponse.results,
      currentPage: 1,
      itemCount: swapiResponse.count
    }

    const resultFalse = starshipsStore.getters.isFullyloaded(state)
    expect(resultFalse).toBeFalsy()

    state.itemCount = 10
    const resultTrue = starshipsStore.getters.isFullyloaded(state)
    expect(resultTrue).toBeTruthy()
  })
})

describe('starships store - mutations', () => {
  it('RECEIVE_STARSHIPS', () => {
    const state = {
      starships: [],
      currentPage: 1,
      itemCount: 0
    }

    starshipsStore.mutations.RECEIVE_STARSHIPS(state, { data: swapiResponse })
    expect(state.starships.length).toEqual(10)
    expect(state.itemCount).toEqual(37)
  })

  it('CHANGE_PAGE', () => {
    const state = {
      currentPage: 1
    }

    starshipsStore.mutations.CHANGE_PAGE(state, { page: 2 })
    expect(state.currentPage).toEqual(2)
    starshipsStore.mutations.CHANGE_PAGE(state, { page: 42 })
    expect(state.currentPage).toEqual(42)
  })
})

describe('starships store - actions', () => {
  it('should loadStarships', (done) => {
    jest.unmock('@/api/swapi')
    const swapi = require.requireActual('@/api/swapi')
    swapi.getStarships = jest.fn((page) => new Promise(resolve => {
      resolve(swapiResponse)
    }))

    const pageNum = 1
    testAction(starshipsStore.actions.loadStarships, pageNum, {}, [
      { type: 'CHANGE_PAGE', payload: { page: 1 } },
      { type: 'RECEIVE_STARSHIPS', payload: { data: swapiResponse } }
    ], done)
  })
})
