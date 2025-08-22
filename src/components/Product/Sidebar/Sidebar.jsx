import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import axios from "axios";

function Sidebar() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/kategori.json?timestamp=" + new Date().getTime()
        );
        // timestamp -> supaya tidak cache di browser
        setItems(response.data);
        localStorage.setItem("items", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // listener jika localStorage berubah
    const handleStorage = () => {
      const local = localStorage.getItem("items");
      if (local) setItems(JSON.parse(local));
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Cahaya Acrylic</h2>
      <h3 className={styles.title}>Kategori Produk</h3>

      <div className={styles.section}>
        
        <ul className={styles.menu}>
          {items.map((item, idx) => (
            <li key={idx} className={styles.item}>
              <span>{item.name}</span> {/* ambil title dari JSON */}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
