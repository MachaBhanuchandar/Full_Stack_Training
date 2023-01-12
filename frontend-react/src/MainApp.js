import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import EmployePage from "./pages/EmployePage";
import HeaderPage from "./pages/Headerpage";
import StudentPage from "./pages/StudentPage";
import HomePage from "./pages/Homepage";
import StudentList from "./pages/studentList";
import UserCurd from "./pages/UsersCurd";
function MainApp() {

    return (
        <div className="App">
            <BrowserRouter>
                <HeaderPage />
                <Routes>
                    <Route path="/course" element={<CoursePage />}></Route>
                    <Route path="/student" element={<StudentPage />}></Route>
                    <Route path="/employe" element={<EmployePage />}></Route>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/studentList" element={<StudentList />}></Route>
                    <Route path="/usersCurd" element={<UserCurd />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainApp;
