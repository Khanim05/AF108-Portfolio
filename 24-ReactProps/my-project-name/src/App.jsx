import React from 'react';
import Header from './component/header/Header';
import ServiceGeneraly from './component/serviceGeneraly/ServiceGeneraly';
import PortfoG from './component/portfG/PortfoG'
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <div>
      <Header />    
      <ServiceGeneraly/>
      <PortfoG/>
      <Footer/>
    </div>
  );
};

export default App;
