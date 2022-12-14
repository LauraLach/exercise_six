import React from "react";
import { Link } from "react-router-dom";

function Header () {
    return (
        <header>
            <nav>
                <a href="/">
                    <p>Home</p>
                </a>
                <a href="/login">
                    <p>Login</p>
                </a>
                <a href="/create">
                    <p>Create User</p>
                </a>
            </nav>
        </header>
    );
}

export default Header;