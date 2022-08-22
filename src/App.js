import React from "react";

function App() {
  return (
    <>
      <h1 className="main-heading">Markdown Previewer</h1>
      <textarea
        name="editor"
        id="editor"
        cols="30"
        rows="10"
      ></textarea>
      
      <div id="preview"></div>
    </>
  );
}

export default App;
