import { renderComponent, expect } from '../test-helper'
import {
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils'

import Editor from '../../src/components/editor'

describe('The Editor', function() {
  it('should output a textarea', function() {
    const props = {
      value: '',
      onChange: function() {}
    }

    const component = renderComponent(Editor, props)
    const test = findRenderedDOMComponentWithTag(component, 'textarea')
    expect(test.type).to.equal('textarea')
  })

  it('when textarea value changes, it should be displayed', function() {
    let props = {
      value: '',
      onChange: function() {}
    }

    const event = {
      target: {
        value: 'some text'
      }
    }

    const component = renderComponent(Editor, props)
    const textarea = findRenderedDOMComponentWithTag(component, 'textarea')

    Simulate.change(textarea, event)
    expect(textarea.value).to.equal(event.target.value)
  })

  it('should return a string when passed a value prop', function() {
    const props = {
      value: 'some string',
      onChange: function() {}
    }

    const component = renderComponent(Editor, props)
    const dom = findRenderedDOMComponentWithTag(component, 'textarea')

    expect(dom.value).to.be.a('String')
    expect(dom.value).to.equal('some string')
  })
})
