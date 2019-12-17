import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

function NavWrapper() {
    

    return (
        <nav>
            <NavLink>Mac</NavLink>
            <NavLink>iPad</NavLink>
            <NavLink>iPhone</NavLink>
            <NavLink>Watch</NavLink>
            <NavLink>TV</NavLink>
            <NavLink>Music</NavLink>
            <NavLink>Support</NavLink>
        </nav>
    );
}

export default NavWrapper;