import React from 'react'

function TextArea(props) {
  return (
    <>
      <textarea
        name="editor"
        id="editor"
        cols="30"
        rows="10"
        value={props.content}
        onChange={props.handler}
      ></textarea>
    </>
  )
}

export default TextArea
