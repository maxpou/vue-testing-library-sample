import { testAction } from '../../custom/test-actions'
import { addToSelection, removeFromSelection } from '@/store/actions'

describe('store - actions', () => {
  it('should loadStarships', (done) => {
    const starship = {
      name: 'X-Wing'
    }
    testAction(addToSelection, starship, {}, [
      { type: 'ADD_TO_SELECTION', payload: { starship: starship } }
    ], done)
  })

  it('should removeFromSelection', (done) => {
    const starship = {
      name: 'X-Wing'
    }
    testAction(removeFromSelection, starship, {}, [
      { type: 'REMOVE_FROM_SELECTION', payload: { starship: starship } }
    ], done)
  })
})
