import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; 
import './App.css'
import Home from './page/Home';
import Product from './page/Product';
import Feedback from './page/Feedback';
import Blog from './page/Blog';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<Blog />} />
      </Routes>
    </HelmetProvider>
  )
}

export default App;