import Vue from 'vue'
import jsdom from 'jsdom'
import HelloComponent from '../../src/components/Hello.vue'

const renderer = require('vue-server-renderer').createRenderer()

describe('Test suite for HelloComponent', () => {
  it('Test data msg', () => {
    const ClonedComponent = Vue.extend(HelloComponent)
    const NewComponent = new ClonedComponent({
      data () {
        return {
          msg: 'I am a cool message'
        }
      }
    }).$mount()

    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str)
      const firstHeading = dom.window.document.querySelector('h1')
      expect(firstHeading.textContent).toContain('I am a cool message')
      console.log(err)
    })
  })
})
