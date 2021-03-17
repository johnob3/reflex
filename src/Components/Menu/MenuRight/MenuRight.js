import React from 'react';
import {
	NavLink
} from "react-router-dom";
import {GLOBAL_RAP, GLOBAL_TRAP, GLOBAL_OLD_SCHOOL} from "../../Routes/Routes";

export const MenuRight = () => {
    return (
        <div className="list list-world">
            <h1 className="list-title">WORLD</h1>
            <ul className="menu-list global">
                <li><NavLink className="link" to={GLOBAL_RAP}>RAP</NavLink></li>
                <li><NavLink className="link" to={GLOBAL_TRAP}>TRAP</NavLink></li>
                <li><NavLink className="link" to={GLOBAL_OLD_SCHOOL}>OLD SCHOOL</NavLink></li>
            </ul>
        </div>
    );
};
