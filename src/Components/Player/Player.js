import React from 'react';
import { useLocation} from 'react-router-dom';

 export const Player = () => {
	const location = useLocation();

	const map = React.useMemo(() => {
		return {
		'/domaciRap':'domaci_rep_fix',
		'/domaciTrap':'domaci_trep',
		'/domaciOldSchool':'domaci_old_skul',
		'/straniRap':'global_rep',
		'/straniTrap':'global_trep',
		'/straniOldSchool':'global_old_school',
		}
	},[])


	const value = React.useMemo(() => {
		return map[location.pathname] || map['/domaciRap']
	},[location, map])

	console.log(value)


	return (
		<div className="play-area">
			<iframe
				title="player"
				src={`http://134.122.77.32/public/${value}/embed`}
				frameBorder="0"
				allowtransparency="true"
				style={{ width: '100%', minHeight: '150px', border: 0 }}
			/>
		</div>
	);
};


