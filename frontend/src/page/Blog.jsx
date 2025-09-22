import React, { useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import styles from "./blog.module.css";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Helmet } from "react-helmet-async";

// ---------- Base URL untuk canonical SEO ----------
const BASE_URL = "https://cahaya-acrylic.com";

// ---------- Sample posts data (replace with real API/CMS) ----------
const postsData = [
  {
    id: 1,
    title: "Custom Akrilik untuk Branding Bisnis Anda",
    slug: "custom-akrilik-branding-bisnis",
    date: "2025-09-18",
    author: "Cahaya Acrylic",
    cover: "/FRM_2_01.jpg",
    coverAlt: "Plakat custom akrilik warna transparan dengan logo perusahaan",
    keywords: ["custom akrilik", "plakat akrilik", "akrilik branding", "akrilik custom", "custom acrylic", "acrylic custom"],
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
    cover: "/SGN_B.jpg",
    coverAlt: "Lampu dekoratif akrilik custom di ruang tamu",
    keywords: ["akrilik dekorasi", "custom acrylic", "dekor rumah", "gantungan kunci", "dekorasi custom"],
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
    cover: "/PLKT_5.jpg",
    coverAlt: "Plakat Akrilik custom",
    keywords: ["akrilik plakat", "custom acrylic", "plakat", "plakat akrilik", "plakat custom"],
    excerpt:
      "Hadiah terbaik adalah yang meninggalkan kesan mendalam. Dengan plakat akrilik custom, Anda bisa memberikan kenang-kenangan yang elegan, personal, dan penuh makna.",
    content:
      "<p>Plakat Akrilik </p>",
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

    // meta description
    let metaDesc = document.querySelector("meta[name=description]");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    if (description) metaDesc.setAttribute("content", description);

    // meta keywords
    let metaKeywords = document.querySelector("meta[name=keywords]");
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    if (keywords.length) metaKeywords.setAttribute("content", keywords.join(", "));

    // canonical link
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
        <title>Custom Acrylic Bogor | Akrilik Custom, Cutting Acrylic</title>
        <meta
          name="description"
          content="Cahaya Acrylic menjual berbagai jenis akrilik: akrilik bening, warna, dan custom dengan harga terbaik untuk kebutuhan rumah, kantor, dan dekorasi."
        />
        <meta
          name="keywords"
          content="cahaya acrylic, jual akrilik, akrilik bening, akrilik custom, harga akrilik murah, acrylic custom, custom acrylic, akrilik custom, custom akrilik, akrilik, acrylic, akrilik bogor, akrilik terdekat, plakat akrilik, jual akrilik, toko akrilik, toko acrylic, cutting acrylic, cutting akrilik, akrilik cutting, gantungan kunci, gantungan kunci acrylic, gantungan kunci akrilik"
        />
        <meta
          property="og:title"
          content="Cahaya Acrylic Bogor| Akrilik Custom, Cutting Acrylic"
        />
        <meta
          property="og:description"
          content="Tempat jual akrilik terpercaya: bening, warna, dan custom dengan harga terbaik. Hanya di Cahaya Acrylic."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cahaya-acrylic.com/" />
      </Helmet>
        <Navbar />
      <header className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>Blog - Cahaya Acrylic</h1>
        <p className={styles.blogSubtitle}>
          Tips, inspirasi, dan panduan seputar custom akrilik.
        </p>
      </header>

      <main className={styles.blogList} aria-label="Daftar artikel blog">
        {postsData.map((post) => (
          <article key={post.id} className={styles.blogCard}>
            <Link
              to="/product"
              className={styles.blogCardImage}
              aria-label={`Baca artikel ${post.title}`}
            >
              <img
                src={post.cover}
                alt={post.coverAlt}
                loading="lazy"
                width="210"
                height="140"
                className={styles.blogCardThumb}
              />
            </Link>

            <div className={styles.blogCardContent}>
              <Link
                to="/product"
                className={styles.blogCardTitle}
              >
                {post.title}
              </Link>
              <div className={styles.blogCardMeta}>
                {formatDate(post.date)} • {post.author}
              </div>
              <p className={styles.blogCardExcerpt}>{post.excerpt}</p>
              <div className={styles.blogCardFooter} aria-label="Keywords artikel">
               
                <span className={styles.dot} aria-hidden="true">•</span>
                {post.keywords.slice(0, 3).map((k) => (
                  <span key={k} className={styles.keyword}>
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </main>

      <div className={styles.aboutSection}>
         <h2 className={styles.judul}>Tentang Kami</h2>
        <p>
          Cahaya Acrylic adalah perusahaan yang bergerak di bidang akrilik. 
          Kami menjual berbagai lembaran akrilik berkualitas tinggi serta 
          melayani pesanan custom akrilik. Dengan dukungan mesin laser modern, 
          hasil potongan akrilik lebih presisi dan rapi.
        </p>

        <h2 className={styles.judul2}>Produk Custom Acrylic</h2>
        <ul>
          <li>Plakat Akrilik</li>
          <li>Gantungan Kunci Akrilik</li>
          <li>Signed & Display</li>
          <li>Huruf Timbul</li>
          <li>Tent Holder</li>
        </ul>

        <h2 className={styles.judul3}>Keunggulan Kami</h2>
        <p>
          ✔ Mesin laser cutting untuk hasil presisi  
          ✔ Pengiriman cepat dan aman  
          ✔ Bisa custom sesuai kebutuhan  
          ✔ Melayani retail maupun partai besar  
        </p>

        <h2 className={styles.lokasi}>Lokasi</h2>
        <p>
          📍 <b>Kantor Utama:</b> Pancasan No.19, Kota Bogor, Jawa Barat  
          📍 <b>Cabang Tangerang:</b> Jl. Ruko Modern Land, Kota Tangerang, Banten  
        </p>
      </div>
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
        <Link to="/blog" className={styles.breadcrumbLink}>
          Blog
        </Link>
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
        <figcaption className={styles.detailCaption}>
          {post.coverAlt}
        </figcaption>
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
    </article>
  );
}

// ---------- Main Blog Component ----------
function Blog() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = slug ? findPostBySlug(slug) : null;

  // Redirect ke /blog jika slug tidak valid
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
