import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './views/About/About';
import Home from './views/Home/Home';
import ItemsDetails from './views/ItemsDetails/ItemsDetails';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/items/:id' element={<ItemsDetails />} />
    </Routes>
  );
};

export default AppRoutes;
