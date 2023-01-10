import React, { Component } from "react";
import { marked } from "marked";
import TextArea from "./components/TextArea";
import Previewer from "./components/Previewer";
import Footer from "./components/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: `# H1
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
**bold text**`,
    };
    this.monitorContent = this.monitorContent.bind(this);

    marked.setOptions({
      breaks: true,
    });
  }

  monitorContent(event) {
    this.setState({
      content: event.target.value,
    });
  }

  render() {
    return (
      <>
        <div className="topBar">
          <h2 className="main-heading">Markdown Previewer</h2>
        </div>

        <div className="flex">
          <TextArea
            content={this.state.content}
            handler={this.monitorContent}
          />
          <Previewer content={this.state.content} />
        </div>
        <Footer/>
      </>
    );
  }
}
