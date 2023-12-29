import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import AboutUs from './Components/AboutUs.js';
import ContactUs from './Components/ContactUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Components/Menu.js'



function App() {
  return (
    <div style={{backgroundColor:"#edede9"}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage /> }/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/ContactUs" element={<ContactUs />}/>
        <Route path="/Menu" element={<Menu />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
