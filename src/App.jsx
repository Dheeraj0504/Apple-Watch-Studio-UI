import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Customization from './pages/Customization';

const App = () => {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customization />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;