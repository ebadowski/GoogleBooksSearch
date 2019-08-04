import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper grey lighten-4 grey-text text-darken-3">
                <a href="#!" className="brand-logo left grey-text text-darken-3"><i className="material-icons ">cloud</i>Google Book Search</a>
                <ul className="right">
                    <li>
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >
                            <i className="material-icons grey-text text-darken-3">view_module</i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        >
                            <i className="material-icons grey-text text-darken-3">search</i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;