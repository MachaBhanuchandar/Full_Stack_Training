import React from 'react';
class Employee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Bhanu",
            age: "24",
            salary: "1500000",
            changeName: ""
        }
        this.changeName = this.changeName.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    changeName() {
        // console.log(this.state.name);
        this.setState({ name: this.state.changeName })
    }
    handleChange(event) {
        this.setState({ changeName: event.target.value })
    }
    render() {
        return (

            <div>
                <h1>Name of the employee: {this.state.name} </h1>
                <h1>age: {this.state.age} </h1>
                <h1>salary:{this.state.salary} </h1>
                <input type="text" value={this.state.changeName} onChange={this.handleChange} />
                <button onClick={this.changeName}>change Name</button>
            </div >
        )
    }
}
export default Employee;