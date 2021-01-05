import React, {useState} from 'react'
import {Footer} from "./Components/Footer/Footer"
import {useLocation} from "react-router-dom";
import lRapVid from "./assets/video/vid1dr.mp4"
import lTrapVid from "./assets/video/vid4dt.mp4"
import lOSVid from "./assets/video/vid5do.mp4"
import gRapVid from "./assets/video/vid2sr.mp4"
import gTrapVid from "./assets/video/vid6st.mp4"
import gOSVid from "./assets/video/vid3so.mp4"
import {Menu} from "./Components/Menu/Menu";

function App() {
    const location = useLocation();

    const [data, setData] = useState({page: 'domaci_rep_fix', video: lRapVid})

    const map = React.useMemo(() => {
        return {
            'localRap': {page: 'domaci_rep_fix', video: lRapVid},
            'localTrap': {page: 'domaci_trep', video: lTrapVid},
            'localOldSchool': {page: 'domaci_old_skul', video: lOSVid},
            'globalRap': {page: 'global_rep', video: gRapVid},
            'globalTrap': {page: 'global_trep', video: gTrapVid},
            'globalOldSchool': {page: 'global_old_school', video: gOSVid},
        }
    }, [])

    React.useEffect(() => {
        const data = map[location.pathname.slice(1)] || map["localRap"]
        setData(data)
    }, [location, map])


    return (
        <div className="app-container">
            <video className='videoTag' autoPlay loop muted key={data.video}>
                <source src={data.video} type='video/mp4'/>
            </video>
            <main className="app-main">
                <div className="container">
                    <Menu page={data.page}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
