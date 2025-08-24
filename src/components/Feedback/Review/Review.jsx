import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./review.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    kota: "",
    deskripsi: "",
    foto: null,
    rating: 0, // <-- tambahkan rating di formData
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, foto: e.target.files[0] });
  };

  const handleStarClick = (index) => {
    setFormData({ ...formData, rating: index }); // <-- simpan ke formData
  };

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
    data.append("rating", formData.rating); // <-- kirim rating
    if (formData.foto) {
      data.append("foto", formData.foto);
    }

    try {
      await axios.post("http://localhost:5000/testi", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      await fetchReviews();
      setFormData({ nama: "", kota: "", deskripsi: "", foto: null, rating: 0 }); // <-- reset semua field
    } catch (err) {
      console.error("Error submitting review:", err);
    }
  };

  return (
    <div className={styles.container}>
      {/* List Review */}
      <div className={styles.review_section}>
  {/* Bagian Kiri */}
  <div className={styles.review_intro}>
    <div className={styles.quoteIcon}>“</div>
    <h2 className={styles.title}>What Our Customer Say</h2>
    <p className={styles.subtitle}>
      See and share your review based on your experience with Cahaya Acrylic.
    </p>
  </div>

  {/* Bagian Kanan (Review Cards) */}
  <div className={styles.review_list}>
    {reviews.length > 0 ? (
      reviews.map((rev, index) => (
        <div className={styles.review_card} key={index}>
          <div className={styles.review_imageWrapper}>
            {rev.foto ? (
              <img
                src={`http://localhost:5000/uploads/${rev.foto}`}
                alt={rev.nama}
                className={styles.review_image}
              />
            ) : (
              <div className={styles.image_placeholder}></div>
            )}
          </div>

          <div className={styles.review_content}>
            <p className={styles.review_name}><strong>{rev.nama}</strong></p>
            <p className={styles.review_text}>{rev.deskripsi}</p>
          </div>

          <div className={styles.review_rating}>
            <span className={styles.stars}>
              {"★".repeat(rev.rating || 0)}{"☆".repeat(5 - (rev.rating || 0))}
            </span>
            <span className={styles.rating_number}>
              {(rev.rating || 0).toFixed(2)}
            </span>
          </div>
        </div>
      ))
    ) : (
      <p>Belum ada review.</p>
    )}
  </div>
</div>




      {/* Form Review */}
      <section className={styles.Package}>
        <div className={styles.sub_historyItem}>
          <h2 className={styles.list_historyItem}>Give a Review</h2>
        </div>
        <span className={styles.wordItem}>
          Your experience will mean a lot to us!
        </span>

        <form onSubmit={handleSubmit} className={styles.feedback_card}>
          <h3 className={styles.formTitle}>
            Apakah kamu puas dengan produk kami?
          </h3>

          {/* Rating */}
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((index) => (
              <span
                key={index}
                className={
                  index <= formData.rating ? styles.starActive : styles.star
                }
                onClick={() => handleStarClick(index)}
              >
                ★
              </span>
            ))}
          </div>

          <div className={styles.input_feedback}>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Nama kamu"
              className={styles.inputText}
            />
            <input
              type="text"
              name="kota"
              value={formData.kota}
              onChange={handleChange}
              placeholder="Kota asal"
              className={styles.inputText}
            />
            <textarea
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              placeholder="Ceritakan pengalaman kamu di sini..."
              rows={4}
              className={styles.textarea}
            />
          </div>

          {/* Upload Foto */}
          <div className={styles.actionGroup}>
            <label className={styles.upload_label}>
              <input type="file" accept="image/*" onChange={handleFileChange} />
              Add Photo
            </label>
            <button type="submit" className={styles.shareBtn}>
              Share Your Experience
            </button>
          </div>

          {formData.foto && (
            <p className={styles.previewText}>
              Foto terpilih: {formData.foto.name}
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default Review;
