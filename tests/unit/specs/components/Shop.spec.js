import { mount, shallow } from 'vue-test-utils'
import Shop from '@/components/Shop.vue'
import store from '@/store'

describe('Shop.vue', () => {
  it('test initial rendering', () => {
    const wrapper = mount(Shop, { store })
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })

  it('test rendering with datas', () => {
    const wrapper = shallow(Shop, { store })
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })

  it('should emit an event on created', () => {
    store.dispatch = jest.fn()
    shallow(Shop, { store })
    expect(store.dispatch.mock.calls.length).toBe(1)
    expect(store.dispatch.mock.calls).toEqual([
      ['loadStarships', 1]
    ])
  })

  it('should foo', () => {
    const wrapper = shallow(Shop, { store })
    wrapper.vm.addToSelection = jest.fn()
    const addBtn = wrapper.find('div.ui.bottom.orange.attached.button')
    addBtn.trigger('click')
    expect(wrapper.vm.addToSelection.mock.calls.length).toBe(1)
  })
})
