import React from 'react'
import Index from './Pages/Index'
import {Footer} from "./Components/Footer/Footer"
import {
    BrowserRouter as Router,
} from "react-router-dom";
import bgVid from "./assets/video/vid1dr.mp4"

function App() {
    return (
        <Router>
            {/*<header className="App-header">*/}
            {/*</header>*/}
            <div className="app-container">
                <video className='videoTag' autoPlay loop muted>
                    <source src={bgVid} type='video/mp4' />
                </video>
                <main className="app-main">
                    <Index/>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
