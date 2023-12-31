import Link from "next/link"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <Link href={"/"} className="navbar-brand"aria-current="page">Cursos Online</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav d-flex gap-3">
                        <li className="nav-item">
                            <Link href={"/"} className="btn btn-outline-light" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/cursos"} className="btn btn-outline-light" aria-current="page">Cursos</Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/temas"} className="btn btn-outline-light" aria-current="page">Temas</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;