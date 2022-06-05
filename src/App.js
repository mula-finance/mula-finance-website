import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from "./pages/Home";
import Token from "./pages/Token";
import Wallet from "./pages/Wallet";

 
function App() {
   
  return (

    <div className="font-avenir" >
      <div className="container mx-auto" >
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/token' element={ <Token/>}/>
          <Route path='/wallet' element={ <Wallet/>}/>
        </Routes>
      </div>
      <Footer/> 
    </div>
  );
}

export default App;
