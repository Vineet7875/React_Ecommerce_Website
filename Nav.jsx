import react from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <header>
            <div className="logo">
                <h1>TechnoVineet</h1>
            </div>
            <nav>
                <Link to="/" className="nav-link nav-link-ltr">Products</Link>
                <Link to="/cart" className="nav-link nav-link-ltr"><img id="cart" src="cart.png" />
                </Link>
                {props.length > 0 ? <span>{props.length}</span> : null}
            </nav>

        </header>
    );
}

export default Nav;