import styles from "./service.module.css";

function Service() {
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
                    <div className={styles.layanan_card}>
                        <img src="/CST_I_01.jpg" alt="" />
                        <h2>Acrylic Custom</h2>
                    </div>

                    <div className={styles.layanan_card}>
                        <img src="/KEY_C_01.png" alt="" />
                        <h2>Cutting Acrylic</h2>
                    </div>

                    <div className={styles.layanan_card}>
                        <img src="/LMB_L_01.jpg" alt="" />
                        <h2>Lembaran Acrylic</h2>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Service;
