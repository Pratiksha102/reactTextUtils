
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import { Routes  } from 'react-router-dom';
import {
  BrowserRouter as Router,
 
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <>
  
    
    <Router>
   <Routes>
         
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Navbar/>} />
          
          
        </Routes>
      </Router>  
    </>
  );
}

export default App;
