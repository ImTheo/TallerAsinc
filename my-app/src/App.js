import React from 'react';
import  './App.css';
import Helmet from 'react-helmet';



import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Creations from './components/Creations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import scrp1 from './JS/main'
/*import scrp2 from './JS/plugins'*/

function App() {
  return (
    <div>
    <div id="top" className="ss-preload" className="body">
      <HeaderNav></HeaderNav> 
      <Hero></Hero>
      <About></About>
      <Resume></Resume>
      <Portfolio></Portfolio>
      <Creations></Creations>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  </div>
  );
}

export default App;