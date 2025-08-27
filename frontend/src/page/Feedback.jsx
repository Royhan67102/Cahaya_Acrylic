import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Home/Hero/Hero';;
import Footer from '../components/Footer/Footer';
import Review from '../components/Feedback/Review/Review';

function Feedback() {
    return (
        <div>
            <Navbar/>
            <Hero />
            <Review />
            <Footer/>
        </div>
    );
}

export default Feedback;
