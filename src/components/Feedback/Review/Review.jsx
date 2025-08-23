import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./review.module.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    kota: "",
    deskripsi: "",
    foto: null,
  });

  // ambil data review dari backend
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/testi");
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  // handle perubahan input text
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle upload foto
  const handleFileChange = (e) => {
    setFormData({ ...formData, foto: e.target.files[0] });
  };

  // submit ke backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nama || !formData.kota || !formData.deskripsi) {
      alert("Lengkapi semua field sebelum submit!");
      return;
    }

    const data = new FormData();
    data.append("nama", formData.nama);
    data.append("kota", formData.kota);
    data.append("deskripsi", formData.deskripsi);
    if (formData.foto) {
      data.append("foto", formData.foto);
    }

    try {
      await axios.post("http://localhost:5000/testi", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // refresh list review
      await fetchReviews();

      // reset form
      setFormData({ nama: "", kota: "", deskripsi: "", foto: null });
    } catch (err) {
      console.error("Error submitting review:", err);
    }
  };

  return (
    <div className={styles.container}>
      {/* Judul */}
      <section className={styles.Package}>
        <div className={styles.sub_historyItem}>
          <h2 className={styles.list_historyItem}>Give A Review</h2>
        </div>
        <span className={styles.wordItem}>
          Your experience will mean a lot to us!
        </span>

        {/* Form Review */}
        <form onSubmit={handleSubmit} className={styles.feedback_card}>
          <h3>Apakah Kamu Puas Dengan Produk Kami?</h3>

          <div className={styles.input_feedback}>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Nama kamu"
              className={styles.inputText}
              style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
            />
            <input
              type="text"
              name="kota"
              value={formData.kota}
              onChange={handleChange}
              placeholder="Kota asal"
              className={styles.inputText}
              style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
            />
            <textarea
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              placeholder="Tulis review kamu di sini..."
              rows={4}
            />
          </div>

          {/* Upload Foto */}
          <div className={styles.upload}>
            <label className={styles.upload_label}>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              Add Photo
            </label>
            {formData.foto && <p>Foto terpilih: {formData.foto.name}</p>}
          </div>

          <button type="submit" className={styles.shareBtn}>
            Share Your Experience!
          </button>
        </form>
      </section>

      {/* List Review */}
      <div className={styles.review_list}>
        {reviews.length > 0 ? (
          reviews.map((rev, index) => (
            <div className={styles.review_card} key={index}>
              <p>
                <strong>{rev.nama}</strong> ({rev.kota})
              </p>
              <p>{rev.deskripsi}</p>
              {rev.foto && (
                <img
                  src={`http://localhost:5000/uploads/${rev.foto}`}
                  alt={rev.nama}
                  className={styles.review_photo}
                />
              )}
            </div>
          ))
        ) : (
          <p>Belum ada review.</p>
        )}
      </div>
    </div>
  );
};

export default Review;
