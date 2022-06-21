
import About from './About/About';
import './App.css';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import  { Navbar } from './Navbar/Navbar';
import Portfolio from './Portfolio/Portfolio';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path='home' element={<Home/>} />    
      <Route  path='portfolio' element={<Portfolio/>} />    
      <Route  path='about' element={<About/>} />    
      <Route  path='contact' element={<Contact/>} />    
    </Routes>
    
    
    
    
    
    <Footer/>
    
    
    
    
    
    </>
  );
}

export default App;
