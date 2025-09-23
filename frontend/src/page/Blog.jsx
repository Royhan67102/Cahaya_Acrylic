import React, { useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import styles from "./blog.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

// ---------- Base URL untuk SEO ----------
const BASE_URL = "https://cahaya-acrylic.com";

// ---------- Sample posts data (bisa diganti API/CMS) ----------
const postsData = [
  {
    id: 1,
    title: "Custom Akrilik untuk Branding Bisnis Anda",
    slug: "custom-akrilik-branding-bisnis",
    date: "2025-09-18",
    author: "Cahaya Acrylic",
    cover: "/Product/FRM_2_01.jpg",
    coverAlt: "Plakat custom akrilik warna transparan dengan logo perusahaan",
    keywords: [
      "custom akrilik",
      "plakat akrilik",
      "akrilik branding",
      "akrilik custom",
      "custom acrylic",
      "acrylic custom",
    ],
    excerpt:
      "Branding bukan sekadar logo, tapi bagaimana orang melihat bisnis Anda. Dengan custom akrilik, brand Anda tampil lebih meyakinkan, profesional, dan berkesan.",
    content:
      "<p>Akrilik custom adalah solusi fleksibel untuk barang promosi dan kebutuhan branding. Dalam artikel ini kami bahas material, finishing, ukuran, serta tips pemesanan agar hasil maksimal.</p><h2>Jenis Produk Akrilik</h2><p>Plakat, signage, gantungan kunci, dan display produk — semuanya bisa di-custom dengan akrilik berkualitas.</p>",
  },
  {
    id: 2,
    title: "5 Ide Custom Akrilik untuk Dekorasi Rumah",
    slug: "ide-custom-akrilik-dekorasi-rumah",
    date: "2025-08-30",
    author: "Cahaya Acrylic",
    cover: "/Product/SGN_B.jpg",
    coverAlt: "Lampu dekoratif akrilik custom di ruang tamu",
    keywords: [
      "akrilik dekorasi",
      "custom acrylic",
      "dekor rumah",
      "gantungan kunci",
      "dekorasi custom",
    ],
    excerpt:
      "Dekorasi bukan hanya soal estetika, tapi bagaimana rumah mencerminkan kepribadian Anda. Dengan custom akrilik, hadirkan sentuhan modern dan elegan melalui signage dekorati.",
    content:
      "<p>Akrilik memungkinkan pembuatan dekor modern: lampu, rak minimalis, hingga panel hias. Simak 5 ide yang mudah diwujudkan.</p>",
  },
  {
    id: 3,
    title: "Plakat Akrilik: Pilihan Modern untuk Penghargaan dan Kenang-kenangan",
    slug: "ide-custom-plakat-akrilik",
    date: "2025-08-30",
    author: "Cahaya Acrylic",
    cover: "/Product/PLKT_5.jpg",
    coverAlt: "Plakat Akrilik custom",
    keywords: [
      "akrilik plakat",
      "custom acrylic",
      "plakat",
      "plakat akrilik",
      "plakat custom",
    ],
    excerpt:
      "Hadiah terbaik adalah yang meninggalkan kesan mendalam. Dengan plakat akrilik custom, Anda bisa memberikan kenang-kenangan yang elegan, personal, dan penuh makna.",
    content: "<p>Plakat Akrilik </p>",
  },
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
function BlogList() {
  useSEO({
    title: "Blog - Cahaya Acrylic | Custom Akrilik & Ide Produk",
    description:
      "Temukan ide, panduan, dan tips seputar custom akrilik — plakat, signage, dekorasi, dan banyak lagi.",
    keywords: ["akrilik", "custom akrilik", "akrilik dekorasi", "akrilik bogor", "akrilik jakarta"],
    canonical: `${BASE_URL}/blog`,
  });

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
        <p className={styles.blogSubtitle}>Tips, inspirasi, dan panduan seputar custom akrilik.</p>
      </header>

      {/* MAIN: artikel (kiri) + sidebar (kanan) */}
      <main className={styles.blogList} aria-label="Daftar artikel blog">
        <div className={styles.blogArticles}>
          {postsData.map((post) => (
            <article key={post.id} className={styles.blogCard}>
              {post.cover && (
                <Link
                  to={`/blog/${post.slug}`}
                  className={styles.blogCardImage}
                  aria-label={`Baca artikel ${post.title}`}
                >
                  <img
                    src={post.cover}
                    alt={post.coverAlt}
                    loading="lazy"
                    className={styles.blogCardThumb}
                  />
                </Link>
              )}

              <div className={styles.blogCardContent}>
                <Link to={`/blog/${post.slug}`} className={styles.blogCardTitle}>
                  {post.title}
                </Link>

                <div className={styles.blogCardMeta}>
                  {formatDate(post.date)} • {post.author}
                </div>

                <p className={styles.blogCardExcerpt}>{post.excerpt}</p>

                <div className={styles.blogCardFooter} aria-label="Keywords artikel">
                  {post.keywords.slice(0, 3).map((k) => (
                    <span key={k} className={styles.keyword}>
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar: Tentang Kami */}
        <aside className={styles.blogSidebar}>
          <div className={styles.sidebarBox}>
            <h3>Tentang Kami</h3>
            <p>
              Cahaya Acrylic adalah perusahaan yang bergerak di bidang akrilik.
              Kami menjual berbagai lembaran akrilik berkualitas tinggi serta
              melayani pesanan custom akrilik. Dengan dukungan mesin laser modern,
              hasil potongan akrilik lebih presisi dan rapi.
            </p>
            <ul>
              <li>✔ Mesin laser cutting presisi</li>
              <li>✔ Pengiriman cepat</li>
              <li>✔ Custom sesuai kebutuhan</li>
              <li>✔ Melayani retail & partai besar</li>
            </ul>
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
    <article className={styles.blogDetail}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link to="/blog" className={styles.breadcrumbLink}>Blog</Link>
        <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
        <span aria-current="page">{post.title}</span>
      </nav>

      <header className={styles.detailHeader}>
        <h1 className={styles.detailTitle}>{post.title}</h1>
        <div className={styles.detailMeta}>
          {formatDate(post.date)} • {post.author}
        </div>
      </header>

      <figure className={styles.detailFigure}>
        <img
          src={post.cover}
          alt={post.coverAlt}
          loading="lazy"
          className={styles.detailImage}
        />
        <figcaption className={styles.detailCaption}>{post.coverAlt}</figcaption>
      </figure>

      <section
        className={styles.detailContent}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className={styles.detailFooter}>
        <div>Keywords: {post.keywords.join(", ")}</div>
        <div className={styles.cta}>
          Ingin custom akrilik serupa?{" "}
          <Link to="/contact" className={styles.contactLink}>
            Hubungi kami
          </Link>.
        </div>
      </footer>

      <Footer />
    </article>
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
      <h2 className={styles.notFoundTitle}>Artikel tidak ditemukan</h2>
      <p className={styles.notFoundText}>
        Kembali ke{" "}
        <Link to="/blog" className={styles.backLink}>
          daftar artikel
        </Link>.
      </p>
      <Footer />
    </div>
  );
}

export default Blog;
