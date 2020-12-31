import React from 'react';
import {useLocation} from 'react-router-dom';
import {LOCAL_RAP} from "../Routes/Routes";

export const Player = () => {
    const location = useLocation();

    const map = React.useMemo(() => {
        return {
            'localRap': 'domaci_rep_fix',
            'localTrap': 'domaci_trep',
            'localOldSchool': 'domaci_old_skul',
            'globalRap': 'global_rep',
            'globalTrap': 'global_trep',
            'globalOldSchool': 'global_old_school',
        }
    }, [])

    const value = React.useMemo(() => {
        return map[location.pathname.slice(1)] || map[LOCAL_RAP.slice(1)]
    }, [location, map])


    return (
        <div className="play-area">
            <iframe
                title="player"
                src={`http://134.122.77.32/public/${value}/embed`}
                frameBorder="0"
                style={{width: '100%', minHeight: '150px', border: 0}}
            />
        </div>
    );
};


