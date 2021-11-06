import React, {Component} from "react";
import MDEditor from '@uiw/react-md-editor';



const mkdStr = `# Markdown Editor for [React](https://facebook.github.io/react/)

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container">
      <MEDitor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} />
    </div>
  );
}
\`\`\`
`;

// const global_counter = 0;

// function Editor() {
//     const [value, setValue] = React.useState(mkdStr);
//     const cnt = React.useState(global_counter);
//
//     console.log("changeDetected");
//
//     return (
//         <div className="container">
//             <MDEditor height={200} value={value} onChange={setValue} />
//             <div style={{ padding: "50px 0 0 0" }} />
//         </div>
//     );
// }

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {value: mkdStr};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log({value: event});
        this.setState({value: event});
    }

    render() {
        return (
            <div className="container">
                <MDEditor height={1000} value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}

export default Editor;