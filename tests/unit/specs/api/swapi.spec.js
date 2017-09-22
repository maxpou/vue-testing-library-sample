import swapiResponse from './swapi.response.json'
import * as swapi from '@/api/swapi'

describe('swapi HTTP', () => {
  it('getStarships() should return the response data', () => {
    expect.assertions(1)
    return expect(swapi.getStarships()).resolves.toEqual(swapiResponse)
  })
})
