import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import styles from "./blog.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

// ---------- Base URL untuk SEO ----------
const BASE_URL = "https://cahaya-acrylic.com";

// ---------- Data artikel (lengkap sesuai permintaan) ----------
const postsData = [
  // EDUKASI & INFORMASI
  {
    id: 1,
    title: "Perbedaan Akrilik dan Kaca: Mana yang Lebih Baik?",
    slug: "akrilik-vs-kaca-mana-lebih-baik",
    date: "2025-09-23",
    author: "Cahaya Acrylic",
    category: "Edukasi",
    cover: "/blog/AK.jpeg",
    coverAlt: "Perbandingan akrilik dan kaca",
    keywords: ["akrilik vs kaca", "keunggulan akrilik", "kaca vs akrilik"],
    excerpt:
      "Bandingkan akrilik dan kaca dari sisi kekuatan, bobot, kejelasan, dan harga. Temukan mana yang terbaik untuk kebutuhan Anda.",
    content:
      "<p>Akrilik dan kaca masing-masing punya keunggulan. Akrilik lebih ringan dan tahan benturan, kaca lebih tahan gores dan tahan panas. Pilihan terbaik bergantung pada kebutuhan desain, budget, dan lokasi pemasangan.</p>",
  },
  {
    id: 2,
    title: "Jenis-Jenis Akrilik dan Fungsinya",
    slug: "jenis-jenis-akrilik-dan-fungsinya",
    date: "2025-09-22",
    author: "Cahaya Acrylic",
    category: "Edukasi",
    cover: "/blog/JJA.png",
    coverAlt: "Jenis jenis akrilik",
    keywords: ["jenis akrilik", "macam akrilik", "fungsi akrilik"],
    excerpt:
      "Pelajari jenis-jenis akrilik: bening, opal, translucent, mirror, dan cast vs extruded — serta fungsi ideal masing-masing.",
    content:
      "<p>Ada banyak jenis akrilik: bening untuk display, opal untuk diffuser lampu, mirror akrilik sebagai alternatif kaca cermin, dan lain-lain. Pilih yang sesuai fungsinya.</p>",
  },
  {
    id: 3,
    title: "Apa Itu Akrilik? Pengertian dan Kegunaannya",
    slug: "apa-itu-akrilik-pengertian-dan-kegunaannya",
    date: "2025-09-21",
    author: "Cahaya Acrylic",
    category: "Edukasi",
    cover: "/blog/APA.jpg",
    coverAlt: "Penjelasan apa itu akrilik",
    keywords: ["apa itu akrilik", "kegunaan akrilik", "definisi akrilik"],
    excerpt:
      "Akrilik adalah plastik transparan (PMMA) yang punya banyak aplikasi — dari signage hingga komponen industri. Simak penjelasan lengkapnya di sini.",
    content:
      "<p>Akrilik (PMMA) adalah bahan sintetis yang sering dipakai sebagai alternatif kaca. Keunggulannya ringan, mudah dibentuk, dan tersedia berbagai warna.</p>",
  },
  {
    id: 4,
    title: "Kelebihan dan Kekurangan Bahan Akrilik",
    slug: "kelebihan-kekurangan-akrilik",
    date: "2025-09-20",
    author: "Cahaya Acrylic",
    category: "Edukasi",
    cover: "/blog/KK.jpg",
    coverAlt: "Kelebihan dan kekurangan akrilik",
    keywords: ["kelebihan akrilik", "kekurangan akrilik"],
    excerpt:
      "Ketahui sisi positif dan negatif akrilik agar Anda bisa menentukan kapan harus memilih akrilik atau material alternatif.",
    content:
      "<p>Ringan dan mudah dibentuk adalah kelebihan akrilik; namun akrilik dapat tergores lebih mudah dibanding kaca dan memiliki ketahanan panas yang terbatas.</p>",
  },

  // TIPS & TUTORIAL
  {
    id: 5,
    title: "Cara Membersihkan Akrilik Agar Tetap Mengkilap",
    slug: "cara-membersihkan-akrilik-agar-mengkilap",
    date: "2025-09-19",
    author: "Cahaya Acrylic",
    category: "Tips",
    cover: "/blog/BA.jpg",
    coverAlt: "Membersihkan akrilik",
    keywords: ["cara membersihkan akrilik", "perawatan akrilik", "membersihkan akrilik"],
    excerpt:
      "Panduan aman membersihkan akrilik tanpa menggores permukaan: bahan pembersih yang aman, teknik lap, dan produk yang harus dihindari.",
    content:
      "<p>Gunakan kain microfiber dan sabun ringan. Hindari alkohol dan bahan abrasif. Tutorial lengkap + resep pembersih rumahan ada di artikel.</p>",
  },
  {
    id: 6,
    title: "Cara Membuat Box Akrilik Custom Sendiri (Tutorial DIY)",
    slug: "cara-membuat-box-akrilik-custom-diy",
    date: "2025-09-18",
    author: "Cahaya Acrylic",
    category: "Tips",
    cover: "/blog/BC.jpg",
    coverAlt: "Membuat box akrilik DIY",
    keywords: ["box akrilik custom", "DIY akrilik", "cara membuat box akrilik"],
    excerpt:
      "Step-by-step membuat box akrilik custom sederhana: ukuran, alat, lem khusus akrilik, dan tips finishing untuk hasil rapi.",
    content:
      "<p>Mulai dari ukuran dan pemotongan hingga perekat khusus PMMA — panduan step-by-step buat pemula yang ingin coba project akrilik DIY.</p>",
  },
  {
    id: 7,
    title: "Tips Merawat Plakat Akrilik Supaya Awet",
    slug: "tips-merawat-plakat-akrilik-supaya-awet",
    date: "2025-09-17",
    author: "Cahaya Acrylic",
    category: "Tips",
    cover: "/Product/care_plaque.jpg",
    coverAlt: "Perawatan plakat akrilik",
    keywords: ["plakat akrilik", "cara merawat akrilik", "merawat plakat"],
    excerpt:
      "Cara menjaga plakat akrilik agar tidak kusam dan tetap mengkilap: penyimpanan, pembersihan, dan handling saat pengiriman.",
    content:
      "<p>Simpanan di tempat tidak langsung terkena matahari, gunakan kemasan busa saat kirim, dan bersihkan dengan lembut. Detail tips ada di dalam artikel.</p>",
  },

  // KOMERSIAL / PRODUK
  {
    id: 8,
    title: "Harga Akrilik Per Lembar Terbaru",
    slug: "harga-akrilik-per-lembar-terbaru",
    date: "2025-09-16",
    author: "Cahaya Acrylic",
    category: "Produk",
    cover: "/Product/price_acrylic.jpg",
    coverAlt: "Harga akrilik per lembar",
    keywords: ["harga akrilik", "harga akrilik per lembar"],
    excerpt:
      "Update harga akrilik per lembar (ukuran standar) — faktor yang mempengaruhi harga: ketebalan, jenis, kuantitas pemesanan, dan lokasi pengiriman.",
    content:
      "<p>Harga tergantung jenis dan ketebalan. Artikel ini memberikan kisaran harga dan tips mendapatkan penawaran terbaik.</p>",
  },
  {
    id: 9,
    title: "Rekomendasi Rak Display Akrilik untuk Toko dan Pameran",
    slug: "rekomendasi-rak-display-akrilik",
    date: "2025-09-15",
    author: "Cahaya Acrylic",
    category: "Produk",
    cover: "/Product/display_rack.jpg",
    coverAlt: "Rak display akrilik",
    keywords: ["rak display akrilik", "rak akrilik toko"],
    excerpt:
      "Pilihan rak display akrilik yang cocok untuk toko dan pameran: model bertingkat, rotating, dan modular — plus rekomendasi ukuran dan material.",
    content:
      "<p>Kami ulas beberapa model rak display berdasarkan tujuan: display produk kecil, showcase pameran, dan rak kasual untuk toko retail.</p>",
  },
  {
    id: 10,
    title: "Plakat Akrilik Custom: Cocok untuk Souvenir dan Penghargaan",
    slug: "plakat-akrilik-custom-souvenir-penghargaan",
    date: "2025-09-14",
    author: "Cahaya Acrylic",
    category: "Produk",
    cover: "/Product/plaque_custom.jpg",
    coverAlt: "Plakat akrilik custom",
    keywords: ["plakat akrilik", "souvenir akrilik", "plakat custom"],
    excerpt:
      "Plakat akrilik custom ideal untuk penghargaan perusahaan atau souvenir event. Pilih bentuk, ketebalan, dan printing yang sesuai.",
    content:
      "<p>Beragam opsi finishing: printing UV, engraving, maupun kombinasi metal plate. Kami jelaskan mana yang cocok untuk budget dan tampilan premium.</p>",
  },
  {
    id: 11,
    title: "Huruf Timbul Akrilik: Solusi Branding Modern",
    slug: "huruf-timbul-akrilik-solusi-branding",
    date: "2025-09-13",
    author: "Cahaya Acrylic",
    category: "Produk",
    cover: "/Product/3d_letters.jpg",
    coverAlt: "Huruf timbul akrilik",
    keywords: ["huruf timbul akrilik", "neonbox akrilik", "huruf timbul"],
    excerpt:
      "Huruf timbul akrilik memberi kesan modern pada signage brand Anda — cara produksi, jenis finishing, dan estimasi biaya pemasangan.",
    content:
      "<p>Penjelasan tentang ketebalan, backlighting, dan cara pemasangan huruf timbul agar tahan lama dan terlihat profesional.</p>",
  },

  // SERVICE / JASA
  {
    id: 12,
    title: "Jasa Potong Akrilik Terpercaya di [Lokasi Kamu]",
    slug: "jasa-potong-akrilik-terpercaya-lokasi",
    date: "2025-09-12",
    author: "Cahaya Acrylic",
    category: "Jasa",
    cover: "/Product/cutting_service.jpg",
    coverAlt: "Jasa potong akrilik",
    keywords: ["jasa potong akrilik", "cutting akrilik", "jasa cutting"],
    excerpt:
      "Layanan potong akrilik presisi untuk kebutuhan industri dan kreatif — apa yang harus dicek sebelum memilih penyedia jasa potong akrilik.",
    content:
      "<p>Tips memilih vendor cutting: cek mesin (laser vs CNC), test potong, sample hasil, dan review pelanggan.</p>",
  },
  {
    id: 13,
    title: "Custom Akrilik: Buat Desain Sesuai Kebutuhan",
    slug: "custom-akrilik-buat-desain",
    date: "2025-09-11",
    author: "Cahaya Acrylic",
    category: "Jasa",
    cover: "/Product/custom_service.jpg",
    coverAlt: "Jasa custom akrilik",
    keywords: ["custom akrilik", "desain akrilik", "akrilik custom"],
    excerpt:
      "Jasa custom akrilik mulai dari konsultasi desain sampai produksi massal. Pelajari proses, estimasi waktu, dan opsi finishing yang tersedia.",
    content:
      "<p>Kami jelaskan alur kerja custom: briefing desain, mockup, approval sample, produksi, dan quality control sebelum pengiriman.</p>",
  }
];

// ---------- Utilities ----------
function findPostBySlug(slug) {
  return postsData.find((p) => p.slug === slug);
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function useSEO({ title, description, keywords = [], canonical }) {
  useEffect(() => {
    if (title) document.title = title;

    // Meta description
    let metaDesc = document.querySelector("meta[name=description]");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    if (description) metaDesc.setAttribute("content", description);

    // Meta keywords
    let metaKeywords = document.querySelector("meta[name=keywords]");
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    if (keywords.length) metaKeywords.setAttribute("content", keywords.join(", "));

    // Canonical link
    if (canonical) {
      let linkCanonical = document.querySelector("link[rel='canonical']");
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", canonical);
    }
  }, [title, description, keywords, canonical]);
}

// ---------- Blog List ----------
function BlogList({ onSelectCategory }) {
  const [categoryFilter, setCategoryFilter] = useState("Semua");
  const categories = useMemo(() => {
    const set = new Set(postsData.map((p) => p.category));
    return ["Semua", ...Array.from(set)];
  }, []);

  useSEO({
    title: "Blog - Cahaya Acrylic | Custom Akrilik & Ide Produk",
    description:
      "Temukan ide, panduan, dan tips seputar custom akrilik — plakat, signage, dekorasi, dan banyak lagi.",
    keywords: [
      "akrilik",
      "custom akrilik",
      "akrilik dekorasi",
      "akrilik bogor",
      "akrilik jakarta",
      "plakat akrilik",
      "acrylic cutting",
      "display akrilik",
      "souvenir akrilik",
      "laser cutting acrylic",
    ],
    canonical: `${BASE_URL}/blog`,
  });

  // JSON-LD untuk daftar artikel
  useEffect(() => {
    const ld = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Cahaya Acrylic Blog",
      url: `${BASE_URL}/blog`,
      description:
        "Tips, inspirasi, dan panduan seputar custom akrilik — plakat, signage, dekorasi, dan banyak lagi.",
      publisher: {
        "@type": "Organization",
        name: "Cahaya Acrylic",
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/logo.png`,
        },
      },
      blogPost: postsData.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: post.author,
        },
        image: `${BASE_URL}${post.cover}`,
        description: post.excerpt,
        keywords: post.keywords.join(", "),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${BASE_URL}/blog/${post.slug}`,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const filteredPosts =
    categoryFilter === "Semua"
      ? postsData
      : postsData.filter((p) => p.category === categoryFilter);

  return (
    <div className={styles.blogContainer}>
      <Helmet>
        <meta property="og:title" content="Cahaya Acrylic Bogor | Akrilik Custom, Cutting Acrylic" />
        <meta
          property="og:description"
          content="Tempat jual akrilik terpercaya: bening, warna, dan custom dengan harga terbaik. Hanya di Cahaya Acrylic."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE_URL}/blog`} />
      </Helmet>

      <Navbar />

      <header className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>Blog - Cahaya Acrylic</h1>
        <p className={styles.blogSubtitle}>
          Tips, edukasi, dan produk akrilik untuk kebutuhan bisnis dan rumah.
        </p>
      </header>

      <main className={styles.blogList} aria-label="Daftar artikel blog">
        <div className={styles.blogArticles}>
          {filteredPosts.map((post) => (
            <article key={post.id} className={styles.blogCard}>
              {post.cover && (
                <Link to={`/blog/${post.slug}`} className={styles.blogCardImage} aria-label={`Baca artikel ${post.title}`}>
                  <img src={post.cover} alt={post.coverAlt} loading="lazy" className={styles.blogCardThumb} />
                </Link>
              )}

              <div className={styles.blogCardContent}>
                <Link to={`/blog/${post.slug}`} className={styles.blogCardTitle}>
                  {post.title}
                </Link>

                <div className={styles.blogCardMeta}>
                  {formatDate(post.date)} • {post.author} • <span className={styles.catBadge}>{post.category}</span>
                </div>

                <p className={styles.blogCardExcerpt}>{post.excerpt}</p>

                <div className={styles.blogCardFooter} aria-label={`Keywords artikel ${post.title}`}>
                  {post.keywords.map((k) => (
                    <span key={k} className={styles.keyword}>
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className={styles.blogSidebar}>
          <div className={styles.sidebarBox}>
            <h3>Kategori</h3>
            <ul className={styles.categoryList}>
              {categories.map((c) => (
                <li key={c}>
                  <button
                    className={`${styles.categoryBtn} ${c === categoryFilter ? styles.activeCategory : ""}`}
                    onClick={() => {
                      setCategoryFilter(c);
                      if (onSelectCategory) onSelectCategory(c);
                    }}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sidebarBox}>
            <h3>Artikel Populer</h3>
            <ul className={styles.popularList}>
              {postsData.slice(0, 4).map((p) => (
                <li key={p.id}>
                  <Link to={`/blog/${p.slug}`} className={styles.popularLink}>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sidebarBox}>
            <h3>Tentang Kami</h3>
            <p>
              Cahaya Acrylic melayani pembuatan akrilik custom — plakat, signage,
              huruf timbul, dan rak display. Konsultasi desain & produksi.
            </p>
            <a href="https://wa.me/6281113801838" target="_blank" rel="noreferrer" className={styles.ctaBtn}>
              Hubungi via WhatsApp
            </a>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}

// ---------- Blog Detail ----------
function BlogDetail({ post }) {
  const location = useLocation();

  useSEO({
    title: `${post.title} | Cahaya Acrylic`,
    description: post.excerpt,
    keywords: post.keywords,
    canonical: `${BASE_URL}${location.pathname}`,
  });

  // JSON-LD Schema
  useEffect(() => {
    const ld = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      datePublished: post.date,
      author: { "@type": "Person", name: post.author },
      publisher: { "@type": "Organization", name: "Cahaya Acrylic" },
      image: `${BASE_URL}${post.cover}`,
      description: post.excerpt,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}${location.pathname}`,
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [post, location.pathname]);

  return (
    <div className={styles.blogContainer}>
      <Helmet>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${BASE_URL}${location.pathname}`} />
        <meta property="og:image" content={`${BASE_URL}${post.cover}`} />
      </Helmet>

      <Navbar />

      <article className={styles.blogDetail}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/blog" className={styles.breadcrumbLink}>
            Blog
          </Link>
          <span className={styles.breadcrumbSeparator} aria-hidden="true">
            /
          </span>
          <span aria-current="page">{post.title}</span>
        </nav>

        <header className={styles.detailHeader}>
          <h1 className={styles.detailTitle}>{post.title}</h1>
          <div className={styles.detailMeta}>
            {formatDate(post.date)} • {post.author} • <span className={styles.catBadge}>{post.category}</span>
          </div>
        </header>

        <figure className={styles.detailFigure}>
          <img src={post.cover} alt={post.coverAlt} loading="lazy" className={styles.detailImage} />
          <figcaption className={styles.detailCaption}>{post.coverAlt}</figcaption>
        </figure>

        <section className={styles.detailContent} dangerouslySetInnerHTML={{ __html: post.content }} />

        <footer className={styles.detailFooter}>
          <div>Keywords: {post.keywords.join(", ")}</div>
          <div className={styles.cta}>
            Ingin custom akrilik serupa?{" "}
            <a href="https://wa.me/6281113801838" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              Hubungi kami
            </a>
          </div>
        </footer>
      </article>

      <Footer />
    </div>
  );
}

// ---------- Main Blog Component ----------
function Blog() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = slug ? findPostBySlug(slug) : null;

  // Redirect jika slug tidak valid
  useEffect(() => {
    if (slug && !post) {
      const timeout = setTimeout(() => navigate("/blog"), 1200);
      return () => clearTimeout(timeout);
    }
  }, [slug, post, navigate]);

  if (!slug) return <BlogList />;
  if (post) return <BlogDetail post={post} />;

  return (
    <div className={styles.notFound}>
      <Navbar />
      <h2 className={styles.notFoundTitle}>Artikel tidak ditemukan</h2>
      <p className={styles.notFoundText}>
        Kembali ke{" "}
        <Link to="/blog" className={styles.backLink}>
          daftar artikel
        </Link>
        .
      </p>
      <Footer />
    </div>
  );
}

export default Blog;
