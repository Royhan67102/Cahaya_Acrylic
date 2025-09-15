import { useState } from "react";
import styles from "./service.module.css";

function Service() {
    const [activeCard, setActiveCard] = useState(null);

    const toggleCard = (index) => {
        setActiveCard(activeCard === index ? null : index);
    };

    return (
        <div className={styles.service_container}>

            {/* Keunggulan */}
            <div className={styles.card}>
                <h1>Keunggulan</h1>
                <div>
                    <img src="/proses.jpg" alt="Pengerjaan Cepat" />
                    <h2>Pengerjaan Cepat</h2>

                    <img src="/delivery.jpeg" alt="Pengiriman Cepat" />
                    <h2>Pengiriman Cepat</h2>

                    <img src="/deal.jpeg" alt="Harga Terjangkau" />
                    <h2>Harga Terjangkau</h2>

                    <img src="/LMB_L_01.jpg" alt="Kualitas Terbaik" />
                    <h2>Kualitas Terbaik</h2>
                </div>
            </div>

            {/* Layanan */}
            <div className={styles.layanan}>
                <h1>Layanan Kami</h1>
                <div className={styles.layanan_wrapper}>
                    {[
                        { src: "/CST_I_01.jpg", title: "Acrylic Custom" },
                        { src: "/KEY_C_01.png", title: "Cutting Acrylic" },
                        { src: "/LMB_L_01.jpg", title: "Lembaran Acrylic" }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className={`${styles.layanan_card} ${activeCard === i ? styles.active : ""}`}
                            onClick={() => toggleCard(i)}
                        >
                            <img src={item.src} alt={item.title} />
                            <h2>{item.title}</h2>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Service;
