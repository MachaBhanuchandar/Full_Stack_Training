import { useState } from "react"
function UseStateF(props) {
    const [count, setcount] = useState(0);
    function increment() {
        setcount(count + 1)
    }
    function decrement() {
        setcount(count - 1)
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={() => increment()}>increment</button>
            <button className="btn btn-danger" onClick={() => decrement()}>decrement</button>
            <div><h1>count:{count}</h1></div>
        </div>
    )
}
export default UseStateF;