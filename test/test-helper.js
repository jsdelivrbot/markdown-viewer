import jsdom from 'jsdom'
import React from 'react'
import { expect } from 'chai'
import { renderIntoDocument } from 'react-addons-test-utils'

global.document = jsdom.jsdom()
global.window = global.document.defaultView


function renderComponent(Component, props = {}, state = {}) {
  let component = renderIntoDocument(<Component {...props} />)

  if (state) {
    component.state = state
  }

  return component
}

export { expect, renderComponent }
