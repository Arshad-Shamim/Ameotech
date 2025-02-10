import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';    //after installing npm i bootstarp;
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For JavaScript

import Home from './pages/Home.jsx'

function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default App