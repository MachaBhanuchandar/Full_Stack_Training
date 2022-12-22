import { Link } from "react-router-dom";

function HeaderPage() {
    return (
        <nav className="navbar navbar-expand-lg navbar-lignt bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Home
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/course">
                                Course
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/employe">
                                Employe
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/student">
                                Student
                            </Link>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default HeaderPage;