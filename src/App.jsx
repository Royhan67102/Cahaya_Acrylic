import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './page/Home';
import Product from './page/Product';
import Feedback from './page/Feedback';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product/" element={<Product />} />
      <Route path="feedback" element={<Feedback />} />

    </Routes>
    
    
    </>
  )
}

export default App
