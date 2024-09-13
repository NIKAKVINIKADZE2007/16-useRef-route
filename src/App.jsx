import { useState } from 'react';

import './App.css';
import AppRoutes from './routes';
import Header from './components/header/Header';
import Navbar from './components/NavBar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
