import { createContext, useContext } from "react";
const NameContext = createContext()
const name = "BhanuChandar"
function Home() {
    return (
        <div> home
            <AboutUs />
        </div>
    )
}
function AboutUs() {
    return (
        <div> About Us
            <CountUs />
        </div>
    )
}
function CountUs() {
    const name = useContext(NameContext)
    return (
        <div> Count Us: {name}</div>
    )
}
function MenuItem() {
    return (
        <div>
            <Home />
        </div>
    )
}
function ContextHookDemo() {
    return (
        <NameContext.Provider value={name}>
            <MenuItem />
        </NameContext.Provider>
    )
}

export default ContextHookDemo