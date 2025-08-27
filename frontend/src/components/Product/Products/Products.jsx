import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import Detail from "../../Home/Detail/Detail";
import styles from "./Products.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/item.json");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.kategori === selectedCategory)
    : products;

  // buka popup detail
  const handleDetailClick = (item) => {
    setSelectedItem(item);
  };

  // tutup popup detail
  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className={styles.container}>
      {/* Sidebar dengan callback kategori */}
      <Sidebar onCategoryClick={(kategori) => setSelectedCategory(kategori)} className={styles.sidebar_factory}/>

      {selectedCategory && (
        <>  </>
      )}

      <div className={styles.grid}>
        {filteredProducts.map((product, idx) => (
          <div key={idx} className={styles.card}>
            <img
              src={product.img}
              alt={product.title}
              className={styles.image}
            />

            <h3 className={styles.title}>{product.title}</h3>

            <div className={styles.priceRow}>
              <img src="/price.png" alt="Rp" className={styles.priceIcon} />
              <span className={styles.price}>{product.price}</span>
            </div>

            <div className={styles.rating}>
              ⭐⭐⭐⭐⭐ <span>5.00</span>
            </div>

            <div className={styles.actions}>
              <button
                className={styles.button_detail}
                onClick={() => handleDetailClick(product)}
              >
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* tampilkan Detail kalau ada item yang dipilih */}
      {selectedItem && <Detail item={selectedItem} onClose={closePopup} />}
    </div>
  );
}

export default Products;
