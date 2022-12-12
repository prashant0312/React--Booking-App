import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Hotel from './Hotel/Hotel';
import Home from './Pages/Home/Home';
import List from './Pages/List/List';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/hotels' element={<List/>}/>
          <Route path='/hotels/:id' element={<Hotel/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
