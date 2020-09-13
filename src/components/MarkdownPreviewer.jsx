import React, { Component } from "react";
import marked from "marked";

const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links - Contactame

[Linkedin](www.linkedin.com/in/jamir-patiño-carrascal-)

[Githube](https://github.com/jamir2308)

### Text Decorations

*italic*

**bold**

***bold and italic***

### Images

![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhxk1fhJiepiO0XcBw62sRGrET-DKIrax_5g&usqp=CAU 'meme programacion')

### Blockquote

> To be, or not to be. That is a stupid question.

### Code

\`npm install create-react-app -g\`

\`\`\`
function addTwoNumbers(a, b) {
  return a + b
}
const name = 'Benjamin'
const age = 37
const number = Math.random() * 10
\`\`\`
`;

export default class MarkdownPreviewer extends Component {
  state = {
    texto: initialMarkdown,
  };

  handleChange = (e) => this.setState({ texto: e.target.value });

  render() {
    const { texto } = this.state;

    console.log(texto);
    return (
      <div>
        <h1 className="text-center m-4 text-primary">Markdown Previewer</h1>
        <div className="row">
          <div className="col-6 mx-auto">
            <h6 className="text-center ">Ingresa el texto</h6>
            <textarea
              className="form-control p-2 border-aqua"
              id="editor"
              value={texto}
              onChange={this.handleChange}
            />
          </div>

          <div className="col-6 mx-auto">
            <h6 className="text-center">Resultado:</h6>
            <div
              className="preview rounded p-2"
              dangerouslySetInnerHTML={{ __html: marked(texto) }}
              id="preview"
            />
          </div>
        </div>
      </div>
    );
  }
}
