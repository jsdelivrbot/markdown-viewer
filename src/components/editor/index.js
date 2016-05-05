import React, { Component } from 'react'

export default class Editor extends Component {
  static propTypes = {
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string.isRequired
  }

  state = {
    value: ''
  }

  componentWillMount() {
    this.setState({
      value: this.props.value || ''
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState
  }

  componentDidUpdate() {
    this.props.onChange(this.state.value)
  }

  onTextAreaUpdate(value) {
    this.setState({ value })
  }

  tabKey(event) {
    if (event.KeyCode === 9 || event.which === 9) {
      event.preventDefault()
    }
  }

  render() {
    return (
      <textarea
        {...this.state}
        onChange={e => this.onTextAreaUpdate(e.target.value)}
        placeholder='# Markdown'
        onKeyDown={event => this.tabKey(event)}
      />
    )
  }
}
