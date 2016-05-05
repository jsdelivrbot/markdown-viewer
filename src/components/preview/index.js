import React, { PropTypes } from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
// require('github-markdown-css')

function rawHTML(html) {
  marked.setOptions({
    sanitize: true,
    gfm: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })

  return {
    __html: marked(html)
  }
}

export default function Preview(props) {
  return (
    <div
      className='markdown-body'
      dangerouslySetInnerHTML={rawHTML(props.text)}
    />
  )
}

Preview.propTypes = {
  text: PropTypes.string.isRequired
}
