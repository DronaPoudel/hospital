import React, {useState} from "react"; 
// import './App.css';
// import './components/componentstyles.css'
import Header from './components/Hospital/Header'
import Departform from './components/Hospital/Departform'
// import DepartmentInput from './components/DepartmentInput'
import DepartDisplayer from './components/Hospital/DepartDisplayer'
import Navbar from './components/Website/Navbar'
import Website from './components/Website/Website'
import Introsection from '../src/components/Website/Introsection'
import Hospital from './components/Hospital/Hospital'
import Signin from './components/Website/Signin'
import Signup from './components/Website/Signup'
import DocSignup from './components/Website/SignupDoc'
import { BrowserRouter , Route} from "react-router-dom";
function App() {
  const [departs, setDeparts] = useState([]);
  return (
    <div className="App">
      
        <BrowserRouter>
          <Route path = '/' exact component = {Website}/>

          <Route path = '/Hospital' exact component = {Hospital}/>
          <Route path = '/signin' exact component = {Signin}/>
          <Route path = '/signup' exact component = {Signup}/>
          <Route path = '/DocSignup' exact component = {DocSignup}/>

            {/* <Departform/> */}
            {/* <DepartmentInput onSubmit={text =>setDeparts([{text, complete: false}, ...departs])}/> */}
            {/* <div>
              {departs.map(({text}) => (
                <div key = {text}> {text}</div>
              ))}
            </div> */}
            {/* <Navbar/> */}
        </BrowserRouter>
      
    </div>
  );
}

export default App;
