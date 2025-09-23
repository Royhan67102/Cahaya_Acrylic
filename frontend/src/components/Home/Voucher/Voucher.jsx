// Voucher.jsx
import styles from "./voucher.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import DetailV from "../DetailV/DetailV";

function Voucher() {
  const [voucher, setDatas] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const local = localStorage.getItem("voucher");
      if (local) {
        const parsed = JSON.parse(local);
        setDatas(parsed.slice(0, 3)); // ambil 3 data teratas
      } else {
        try {
          const response = await axios.get("/json/voucher.json");
          setDatas(response.data.slice(0, 3)); // ambil 3 data teratas
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();

    const handleStorage = () => {
      const local = localStorage.getItem("voucher");
      if (local) setDatas(JSON.parse(local).slice(0, 3));
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleDetailClick = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className={styles.voucher}>
      {voucher.map((v, index) => (
        <div className={styles.voucher_card} key={index}>
          <h2 className={styles.title_voucher1}>{v.title}</h2>
          <p className={styles.p_voucher1}>{v.value}</p>
          <button
            className={styles.button_detail}
            onClick={() => handleDetailClick(v)}
          >
            Detail
          </button>
        </div>
      ))}

      {/* Popup Detail Voucher */}
      <DetailV isOpen={isOpen} onClose={closePopup} voucher={selectedItem} />
    </div>
  );
}

export default Voucher;
