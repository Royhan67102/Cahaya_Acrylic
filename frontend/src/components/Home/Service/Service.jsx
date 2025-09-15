import { useState } from "react";
import styles from "./service.module.css";
// Import ikon yang sesuai dari react-icons
import { FaCut, FaDrawPolygon, FaThLarge, FaShippingFast, FaHandshake, FaStar, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

// Data untuk Keunggulan (menggunakan ikon)
const advantagesData = [
    { icon: <FaShippingFast />, title: "Pengerjaan Cepat" },
    { icon: <FaHandshake />, title: "Pengiriman Cepat" }, // Mengganti dengan ikon lebih sesuai
    { icon: <FaTag />, title: "Harga Terjangkau" }, // Menggunakan ikon FaTag
    { icon: <FaStar />, title: "Kualitas Terbaik" }, // Menggunakan ikon FaStar
];

// Data untuk Layanan (sesuai mockup)
const servicesData = [
    { icon: <FaCut />, title: "Cutting Laser", description: "Cahaya Acrylic melayani cutting acrylic sesuai desain yang Anda inginkan dengan hasil presisi dan pengerjaan cepat. Solusi terbaik untuk kebutuhan custom acrylic Anda.", accentColor: "blue" },
    { icon: <FaDrawPolygon />, title: "Acrylic Custom", description: "Cahaya Acrylic menyediakan layanan pembuatan custom acrylic sesuai desain dan kebutuhan Anda, dengan hasil yang rapi dan berkualitas.", accentColor: "blue" },
    { icon: <FaThLarge />, title: "Acrylic Lembaran", description: "Cahaya Acrylic menyediakan berbagai pilihan lembaran acrylic sesuai kebutuhan Anda. Tersedia beragam ketebalan, jenis, dan warna yang dapat disesuaikan dengan keinginan.", accentColor: "blue" } // Aksen ungu
];

function Service() {
    const [activeCard, setActiveCard] = useState(null); // Mulai tanpa kartu aktif

    const toggleCard = (index) => {
        setActiveCard(activeCard === index ? null : index); // Toggle card on/off
    };

    return (
        <div className={styles.service_container}>

            {/* Bagian Hero (opsional, jika Anda ingin menambahkan judul atas seperti di mockup) */}
            <div className={styles.hero_section}>
                <div className={styles.hero_graphic}></div> {/* Grafis spiral */}
                <h1 className={styles.hero_title}>Our Services</h1>
                <p className={styles.hero_subtitle}>Innovating the Digital Experience</p>
            </div>

            {/* Keunggulan (Disusun Horizontal seperti di mockup sebelumnya, tapi dengan styling baru) */}
            <div className={styles.advantages_section}>
                <div className={styles.sub_historyItem}>
                          <h2 className={styles.list_historyItem}>Our Advantages</h2>
                        </div>
                        <span className={styles.wordItem}>The best choice, because our excellence speaks for itself!</span>
                        <br />
               
                <div className={styles.advantages_wrapper}>
                    {advantagesData.map((item, index) => (
                        <div key={index} className={styles.advantage_item}>
                            <div className={styles.advantage_icon}>{item.icon}</div>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Layanan */}
            <div className={styles.services_section}>
                <div className={styles.sub_historyItem}>
                          <h2 className={styles.list_historyItem}>What We Offer</h2>
                        </div>
                        <span className={styles.wordItem}>Serving Quality, Delivering Value!</span>
                        <br />
                <div className={styles.layanan_wrapper}>
                    {servicesData.map((item, i) => (
                        <div
                            key={i}
                            className={`${styles.layanan_card} ${activeCard === i ? styles.active : ""}`}
                            onClick={() => toggleCard(i)}
                        >
                            <div className={`${styles.card_icon} ${item.accentColor === 'purple' ? styles.purple_icon : ''}`}>{item.icon}</div>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                           
                                <Link className={`${styles.learnMoreButton} ${item.accentColor === 'purple' ? styles.purple_button : ''}`} to="/product">See More</Link>
                          
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Service;