import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="/">WeConnect</a>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/about">Why WeConnect?</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/catalog">Catalog</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register a Business</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contacts</a>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn btn-success" to="/login">Log In</Link>
            </li>
        </ul>
    </nav>


);

export default Navigation;
