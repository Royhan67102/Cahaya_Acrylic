import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Home/Hero/Hero';
import Sidebar from '../components/Product/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import Products from '../components/Product/Products/Products';
import styles from './product.module.css'; // Assuming you have a CSS module for styling

function Product() {
    return (
        <div>
            <Navbar/>
            <Hero />
            <div className={styles.layout}>
                <Sidebar/>
                <Products />
            </div>
            <Footer/>
        </div>
    );
}

export default Product;
