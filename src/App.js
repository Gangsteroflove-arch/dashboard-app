//import {BrowserRouter, Routes, Route} from "react-router-dom"
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/ Login";
import Register from "./components/ Register";
import Dashboard from "./components/ Dashboard";
import './App.css';

function App() {
  return (
    <>
      <HashRouter>       
        <Routes>      
           <Route path="/" element={<Home/>}/>
           <Route path="/Login" element={<Login/>}/>
           <Route path="/Register" element={<Register/>}/>
           <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
      </HashRouter>    
    </>
  );
}

export default App;