import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import { expect } from 'chai'
import Preview from '../../src/components/preview'

const renderer = createRenderer()

describe('Preview Component', function() {
  it('Outputs a div', function() {
    renderer.render(<Preview text='' />)
    const result = renderer.getRenderOutput()

    expect(result.type).to.equal('div')
  })

  it('When "# Header" is passed as text it outputs a h1 element', function() {
    renderer.render(<Preview text='# Header' />)
    const result = renderer.getRenderOutput()

    expect(result.props.dangerouslySetInnerHTML.__html)
      .to.match(/<h1 id="header">.*<\/h1>/)
  })
})
