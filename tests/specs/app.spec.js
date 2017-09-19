import { mount, shallow } from 'vue-test-utils'
import MainComponent from '@/App.vue'
import store from '@/store'

describe('App.vue', () => {
  it('test initial rendering', () => {
    const wrapper = mount(MainComponent, { store })
    const appTemplate = wrapper.html()

    expect(appTemplate).toMatchSnapshot()
  })

  it('test rendering with datas', () => {
    const wrapper = shallow(MainComponent, { store })
    const appTemplate = wrapper.html()

    expect(appTemplate).toMatchSnapshot()
  })
})
