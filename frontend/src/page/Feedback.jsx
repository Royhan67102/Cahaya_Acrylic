import { Helmet } from "react-helmet-async";
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Home/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Review from '../components/Feedback/Review/Review';

function Feedback() {
    return (
        <div>
        <Helmet>
            <title>Feedback Pelanggan | Cahaya Acrylic</title>
        <   meta
                name="description"
                content="Lihat ulasan dan pengalaman pelanggan yang sudah menggunakan produk akrilik dari Cahaya Acrylic. Kepuasan Anda adalah prioritas kami."
            />
            <meta
                name="keywords"
                content="feedback akrilik, review pelanggan, ulasan akrilik, cahaya acrylic"
            />
            <meta
                property="og:title"
                content="Feedback Pelanggan | Cahaya Acrylic"
            />
            <meta
                property="og:description"
                content="Testimoni pelanggan Cahaya Acrylic tentang kualitas produk akrilik kami."
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content="https://cahaya-acrylic.com/feedback"
            />  
        </Helmet>

            <Navbar />
            <Hero />
            <Review />
            <Footer />
        </div>
    );
}

export default Feedback;