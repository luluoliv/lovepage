import { Link } from "react-router-dom";

export default function NavBar() {
    const NavBarStyle = {
        margin: "2% auto",
        borderRadius: "64px",
        width: "60%",
        padding: "0.5%",
        fontSize: "1.3em",
    };

    return (
        <nav
            style={NavBarStyle}
            class="navbar navbar-expand-lg navbar-light bg-light"
        >
            <div className="mx-auto">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <Link to={"/home"} class="nav-item active">
                            <a class="nav-link" href="/">
                                <i class="fa-solid fa-house"></i>
                                <span class="sr-only">(current)</span>
                            </a>
                        </Link>
                        <Link to={"/gallery"} class="nav-item">
                            <a class="nav-link" href="/">
                                <i class="fa-solid fa-images"></i>
                            </a>
                        </Link>
                        <Link to={"/games"} class="nav-item">
                            <a class="nav-link" href="/">
                                <i class="fa-solid fa-gamepad"></i>
                            </a>
                        </Link>
                        <Link to={"/places"} class="nav-item">
                            <a class="nav-link" href="/">
                                <i class="fa-solid fa-earth-americas"></i>
                            </a>
                        </Link>
                        <Link to={"/movies"} class="nav-item">
                            <a class="nav-link" href="/">
                                <i class="fa-solid fa-ticket"></i>
                            </a>
                        </Link>
                        <Link to={"/movies"} class="nav-item">
                            <a class="nav-link" href="/">
                                <i class="fa-solid fa-bell"></i>
                            </a>
                        </Link>
                        <Link to={"/movies"} class="nav-item">
                            <a class="nav-link disabled" href="/">
                                <i class="fa-solid fa-circle-user"></i>
                            </a>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
