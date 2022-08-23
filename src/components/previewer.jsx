import React from 'react'
import { marked } from "marked";

function Previewer(props) {
  return (
    <>
      <div
        id="preview"
        dangerouslySetInnerHTML={{__html:marked.parse(props.content)}}
      ></div>
    </>
  )
}

export default Previewer
