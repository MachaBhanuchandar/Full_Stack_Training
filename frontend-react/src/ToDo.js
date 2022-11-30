import React from 'react';
class Data extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
        this.saveChange = this.saveChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    onSave() {
        this.setState({ text: this.state.onsave })
    }
    saveChange(event) {

        this.setState({ onsave: event.target.value })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.onSave} onChange={this.saveChange} />
                <button onClick={this.onSave}>save</button>
                <h1>{this.state.text} </h1>
            </div>
        )
    }
}
export default Data;