import React, { Component } from 'react'
import { marked } from "marked";

export default class Previewer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <>
      <div
        id="preview"
        // dangerouslySetInnerHTML={{__html:marked.parse(this.props.content)}}
      ></div>
    </>
  )
  }
}