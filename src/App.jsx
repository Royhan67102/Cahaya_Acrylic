import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './page/Home';
import Product from './page/Product';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product/" element={<Product />} />

    </Routes>
    
    
    </>
  )
}

export default App
