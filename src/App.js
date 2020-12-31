import React from 'react'
import './App.scss';
import Index from './Pages/Index'
import {Footer} from "./Components/Footer/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <header className="App-header">
      </header>
      <main>
        <Index />
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
