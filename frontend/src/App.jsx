import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; 
import './App.css'
import Home from './page/Home';
import Product from './page/Product';
import Feedback from './page/Feedback';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="feedback" element={<Feedback />} />
      </Routes>
    </HelmetProvider>
  )
}

export default App;