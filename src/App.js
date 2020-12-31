import React from 'react'
import './App.scss';
import Index from './Pages/Index'
import {Footer} from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Index />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
