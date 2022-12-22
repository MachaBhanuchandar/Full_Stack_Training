import { useRef, useEffect } from "react";

function UseRefDEmo() {
    const inputRef = useRef("")

    useEffect(() => {
        inputRef.current.focus();
    })

    const submit = (e) => {
        console.log("input ref value:", inputRef.current.value)
    }
    return (
        <div>
            <h1> Demo of useRef </h1>
            <input type="text" ref={inputRef} />
            <button onClick={submit}>save</button>
        </div>
    )
}
export default UseRefDEmo