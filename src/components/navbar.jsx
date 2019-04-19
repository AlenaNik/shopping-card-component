import React, { Component } from 'react';
// Funcional component
const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Shopping card (kinda)
                <span className="badge badge-pill badge-secondary">
                {totalCounters}
            </span>
            </a>
        </nav>
    );
};
export default NavBar;