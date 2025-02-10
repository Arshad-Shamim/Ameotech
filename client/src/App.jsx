import {Routes,Route,Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';    //after installing npm i bootstarp;
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For JavaScript

import {Home} from './pages/Home.jsx'
import Technologies from './pages/Technologies.jsx'

function App(){
  return(
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/technologies" element={<Technologies/>}/>
    </Routes>
  )
}

export default App