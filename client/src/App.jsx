import {Routes,Route,Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';    //after installing npm i bootstarp;
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For JavaScript

import {Home} from './pages/Home.jsx'
import Technologies from './pages/Technologies.jsx'
import Aboutus from './pages/Aboutus.jsx';
import Contactus from './pages/Contactus.jsx';
import Career from './pages/Career.jsx';
import WebsiteDev from './pages/services/WebsiteDev.jsx';
import MobileDev from './pages/services/MobileDev.jsx';
import CustomSoftware from './pages/services/CustomSoftware.jsx';
import DigitalMarketing from './pages/services/DigitalMarketing.jsx';
import ProductDesign from './pages/services/ProductDesign.jsx';

function App(){
  return(
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/technologies" element={<Technologies/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contactus"element={<Contactus/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/services">
        <Route path="website" element={<WebsiteDev/>}/>
        <Route path="mobileapp" element={<MobileDev/>}/>
        <Route path="software" element={<CustomSoftware/>}/>
        <Route path="productdesign" element={<ProductDesign/>}/>
        <Route path="digitalmarketing" element={<DigitalMarketing/>}/>
      </Route>
    </Routes>
  )
}

export default App