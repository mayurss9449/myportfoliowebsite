
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Manwatche from './Man/Manwatche';
import Woman from './Woman/Woman';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='app'>
        
        
        <Routes>

        <Route path='/home' element={<><Header /><Home /><Footer /></>} />
        <Route path='/menwatch' element={<><Header /><Manwatche/> </>} />
        <Route path='/woman' element={<><Header /><Woman/> </>} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
