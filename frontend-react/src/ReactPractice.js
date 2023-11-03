import React from "react";
import ReactDOM from "react-dom";
const numbers = [1, 2, 3, 4, 5];
const updateNumbers = numbers.map((numbers) => {
    return <li>{numbers}</li>;
})
ReactDOM.render(
    <ul>
        {updateNumbers}
    </ul>,
    document.getElementById('root')

);
export default ReactPractice;