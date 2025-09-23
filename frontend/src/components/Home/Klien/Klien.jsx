import React, { useEffect, useState } from "react";
import styles from "./klien.module.css";

const Klien = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("/json/klien.json")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  return (
    <section className={styles.klien_section}>
      <h2 className={styles.klien_title}>Klien Kami</h2>
      <p className={styles.klien_desc}>
        Berbagai institusi, pelaku usaha, dan individu telah mempercayakan
        kebutuhan akrilik mereka kepada kami. Kepercayaan ini adalah bukti
        komitmen kami dalam memberikan hasil terbaik.
      </p>
      <div className={styles.klien_grid}>
        {clients.map((client) => (
          <div className={styles.klien_logo} key={client.name}>
            <img src={client.img} alt={client.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Klien;
