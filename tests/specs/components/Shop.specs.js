import { mount, shallow } from 'vue-test-utils'
import Selection from '@/components/Shop.vue'
import store from '@/store'

describe('Shop.vue', () => {
  it('test initial rendering', () => {
    const wrapper = mount(Selection, { store })
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })

  it('test rendering with datas', () => {
    const wrapper = shallow(Selection, { store })
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })
})
