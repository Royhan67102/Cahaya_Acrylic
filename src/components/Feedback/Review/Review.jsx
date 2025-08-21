import { useState } from "react";
import styles from "./review.module.css";

function Review() {
  const [reviewText, setReviewText] = useState("");
  const [photo, setPhoto] = useState(null);
  const [reviews, setReviews] = useState([]);

  const handleAddReview = () => {
    if (!reviewText.trim()) {
      alert("Silakan isi review terlebih dahulu!");
      return;
    }

    const newReview = {
      id: Date.now(),
      text: reviewText,
      photo: photo ? URL.createObjectURL(photo) : null, // kalau ada foto
    };

    setReviews([newReview, ...reviews]); // tambahkan review baru ke daftar
    setReviewText(""); // reset input
    setPhoto(null); // reset photo
  };

  return (
    <div className={styles.container}>
      <section className={styles.Package}>
        <div className={styles.sub_historyItem}>
          <h2 className={styles.list_historyItem}>Give A Review</h2>
        </div>
        <span className={styles.wordItem}>
          Your experience will mean a lot to us!
        </span>

        <div className={styles.feedback_card}>
          <h3>Apakah Kamu Puas Dengan Cahaya Acrylic?</h3>

          <div className={styles.input_feedback}>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Tulis review kamu di sini..."
              rows={4}
            />
          </div>

          <div className={styles.upload}>
            <label className={styles.upload_label}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
              Add Photo
            </label>
            {photo && <p>Foto terpilih: {photo.name}</p>}
          </div>
        </div>
      </section>

      <button onClick={handleAddReview} className={styles.shareBtn}>
        Share Your Experience!
      </button>

      {/* List Review yang sudah ditambahkan */}
      <div className={styles.review_list}>
        {reviews.map((rev) => (
          <div className={styles.review_card} key={rev.id}>
            <p>{rev.text}</p>
            {rev.photo && (
              <img
                src={rev.photo}
                alt="review"
                className={styles.review_photo}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;