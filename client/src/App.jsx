import {Routes,Route,Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';    //after installing npm i bootstarp;
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For JavaScript

import {Home} from './pages/Home.jsx'
import Technologies from './pages/Technologies.jsx'
import Aboutus from './pages/Aboutus.jsx';
import Contactus from './pages/Contactus.jsx';
import Career from './pages/Career.jsx';

function App(){
  return(
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/technologies" element={<Technologies/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contactus"element={<Contactus/>}/>
      <Route path="/career" element={<Career/>}/>
    </Routes>
  )
}

export default App