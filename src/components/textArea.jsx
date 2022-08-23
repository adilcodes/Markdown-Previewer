import React, { Component } from 'react'

export default class TextArea extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
        <textarea
          name="editor"
          id="editor"
          cols="30"
          rows="10"
          value={this.props.content}
          onChange={this.props.handler}
        ></textarea>
      </>
    )
  }
}
