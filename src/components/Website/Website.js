import React, {useState} from "react"; 
// import './App.css';
import './componentstyles.css';
// import DepartmentInput from './components/DepartmentInput'
import Navbar from './Navbar';
import Hero from './Hero'
import Introsection from './Introsection';
import GetStarted from './GetStarted'
import Whyuse from './Ourservicessection'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      
        <Hero />
        <Introsection />
        <GetStarted />
        <Whyuse />
        <Footer />
      
    </div>
  );
}

export default App;
