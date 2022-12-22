import { useState } from "react";
import { useNavigate } from "react-router-dom"
function StudentPage() {
    const navigation = useNavigate()
    const [name, setName] = useState("");
    const [age, setAge] = useState("")
    const save = (e) => {
        let student = {
            name: name,
            age: age
        }
        localStorage.setItem("student", JSON.stringify(student))
        navigation("/studentList")
    }
    const handelNameChange = (e) => {
        setName(e.target.value)
    }
    const handelAgeChange = (e) => {
        setAge(e.target.value)
    }
    return (
        <div>
            <div className="container">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => handelNameChange(e)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter age"
                        value={age}
                        onChange={(e) => handelAgeChange(e)} />
                </div>
                <button className="btn btn-success" onClick={save}>save</button>
            </div>

        </div>
    );
}
export default StudentPage;