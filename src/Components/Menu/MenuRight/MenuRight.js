import React from 'react';
import {
	Link
  } from "react-router-dom";

export const MenuRight = () => {
	return (
		<ul className="lista wrld strana">
			<h1 className="naslov-liste">WORLD</h1>
				<li><Link className="active-link domlink" to="/straniRap">RAP</Link></li>
                <li><Link className="domlink" to="/straniTrap">TRAP</Link></li>
                <li><Link className="domlink" to="/straniOldSchool">OLD SCHOOL</Link></li>
		</ul>
	);
};
