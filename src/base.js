import React, { Component } from 'react'
import Editor from './components/editor'
import Preview from './components/preview'

export default class Base extends Component {
  state = {
    text: ''
  }

  onChange(text) {
    this.setState({ text })
  }

  render() {
    return (
      <div className='markdown-viewer'>
        <h1>Markdown Viewer</h1>
        <div className='markdown-editor'>
          <Editor value={this.state.text} onChange={this.onChange.bind(this)}/>
          <Preview text={this.state.text} />
        </div>
      </div>
    )
  }
}
