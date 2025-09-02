import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import axios from "axios";

function Sidebar({ onCategoryClick }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const local = localStorage.getItem("data");
      if (local) {
        setItems(JSON.parse(local));
      } else {
        try {
          const response = await axios.get("/item.json");
          setItems(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
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
          {items.slice(0, 7).map((item, idx) => (
            <li
              key={idx}
              className={styles.item}
              onClick={() => onCategoryClick(item.kategori)} 
            >
               <img src={item.img} alt={item.kategori} className={styles.thumbnail} 
        />
              <span>{item.kategori}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
