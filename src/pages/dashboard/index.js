import React from "react";
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

export default class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(content) {
        this.setState({ text: content })
    }

    render() {
        return (
            <div style={{width: '80%', height: '250px', display: 'inline-block'}}>
                <ReactQuill value={this.state.text}
                    style={{height: '100%'}}
                    onChange={this.handleChange} />
            </div>

        )
    }
}