import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const MenuLeft = () => {

    return (
        <div className="lista-main domaca">
            <ul className="lista">
                <h1 className="naslov-liste">BALKAN</h1>
                <li><Link className="active-link domlink" to="/domaciRap">RAP</Link></li>
                <li><Link className="domlink" to="/domaciTrap">TRAP</Link></li>
                <li><Link className="domlink" to="/domaciOldSchool">OLD SCHOOL</Link></li>
            </ul>
        </div>
    )
}

