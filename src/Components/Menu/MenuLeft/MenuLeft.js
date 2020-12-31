import React from 'react';
import {
    NavLink
} from "react-router-dom";
import {LOCAL_OLD_SCHOOL, LOCAL_RAP, LOCAL_TRAP} from "../../Routes/Routes";

export const MenuLeft = () => {

    return (
        <div className="list-main">
            <h1 className="list-title">BALKAN</h1>
            <ul className="menu-list">
                <li><NavLink activeClass className="link" to={LOCAL_RAP}>RAP</NavLink></li>
                <li><NavLink className="link" to={LOCAL_TRAP}>TRAP</NavLink></li>
                <li><NavLink className="link" to={LOCAL_OLD_SCHOOL}>OLD SCHOOL</NavLink></li>
            </ul>
        </div>
    )
}

