import { renderComponent, expect } from '../test-helper'
import Editor from '../../src/components/editor'
import { findRenderedDOMComponentWithTag } from 'react-addons-test-utils'

describe('The Editor', function() {
  let component

  before(function() {
    component = renderComponent(Editor)
  })

  it('should output a textarea', function() {
    const test = findRenderedDOMComponentWithTag(component, 'textarea')
    expect(test.type).to.equal('textarea')
  })
})
