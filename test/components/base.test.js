import { renderComponent, expect } from '../test-helper'
import {
  findRenderedComponentWithType,
  findRenderedDOMComponentWithTag,
  findRenderedDOMComponentWithClass,
  Simulate
} from 'react-addons-test-utils'

import Base from '../../src/base'
import Editor from '../../src/components/editor'
import Preview from '../../src/components/preview'

describe('Base Component', function() {
  let component

  before(function() {
    component = renderComponent(Base)
  })

  it('should output the Editor Component', function() {
    const test = findRenderedComponentWithType(component, Editor)
    expect(test).to.exist
  })

  it('should update preview when editor is changed', function() {
    const textarea = findRenderedDOMComponentWithTag(component, 'textarea')
    const preview = findRenderedDOMComponentWithClass(component, 'markdown-body')

    Simulate.change(textarea, { target: { value: 'some text'}})
    expect(preview.innerHTML).to.match(/<p>some text<\/p>/)
  })
})
