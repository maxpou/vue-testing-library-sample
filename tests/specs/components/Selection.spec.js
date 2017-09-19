import Vuex from 'vuex'
import { mount } from 'vue-test-utils'
import Selection from '@/components/Selection.vue'
import store from '@/store'
import swapiResponse from '../api/swapi.response.json'

describe('Selection.vue', () => {
  it('test initial rendering', () => {
    const wrapper = mount(Selection, { store })
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })

  it('test conditional rendering', () => {
    const mockedStore = {
      getters: {
        mySelection (state) {
          return swapiResponse.results.filter(starship => {
            return starship.name === 'Death Star' || starship.name === 'X-wing'
          })
        }
      }
    }
    const store = new Vuex.Store(mockedStore)
    const wrapper = mount(Selection, { store })
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })
})
