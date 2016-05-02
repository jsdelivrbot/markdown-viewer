import React from 'react'
import { expect } from 'chai'
import { createRenderer } from 'react-addons-test-utils'

import Base from '../../src/base'
import Editor from '../../src/components/editor'

describe('Base Component', function() {

  it('should output the Editor Component', function() {
    const renderer = createRenderer()
    renderer.render(<Base />)

    const result = renderer.getRenderOutput()

    expect(result.type).to.equal('div')
    expect(result.props.children).to.contain(
      <Editor />
    )
  })
})
