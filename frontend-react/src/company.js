import React from "react";
class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addreas: "hyd"
        }
    }
    render() {
        return (
            <div>
                My company name is {this.props.company} {this.state.addreas}
            </div>)
    }
}
export default Company;