import { marked } from "marked";
import React, { useState } from "react";
import TextArea from "./components/TextArea";
import Previewer from "./components/Previewer";

function App() {

  const [content, setContent] = useState(`
  # H1
  ## H2
  [Link](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  - First item
  - Second item
  - Third item
  > blockquote
  ![alt text](image.jpg)
  **bold text**
  `);

  const monitorContent = (event) => {
    setContent(event.target.value);
  }

  marked.setOptions({
    breaks : true,
  })

  return (
    <>
      <h1 className="main-heading">Markdown Previewer</h1>
      <TextArea content={content} handler={monitorContent} />
      <Previewer content={content} />
    </>
  );
}

export default App;
