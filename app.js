// ============================================================
//  Bouquet Ghorahi — Main Application
//  Edit PRODUCTS array below to add/change bouquets
//  Edit SOCIAL_LINKS to update Facebook/Instagram URLs
//  Edit CONTACT_INFO to update phone/address
// ============================================================

const { useState, useEffect } = React;

// ── CONFIGURATION — EDIT THESE ─────────────────────────────
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyi69KIoVuBdyyE6ed-LtUUYSwUgacjNwsFCG05RbqcvvRN2psYzr52C6-6fEWzWBaF/exec";

const SOCIAL_LINKS = {
  facebook:  "https://facebook.com",     // ← Replace with your real Facebook URL
  instagram: "https://instagram.com",    // ← Replace with your real Instagram URL
  tiktok:    "https://tiktok.com",       // ← Replace with your real TikTok URL
  whatsapp:  "https://wa.me/977",        // ← Add your number: e.g. https://wa.me/9779801234567
};

const CONTACT_INFO = {
  location: "Ghorahi, Dang, Nepal",
  deliveryArea: "Delivering across Ghorahi Municipality, Nepal",
};

const PRODUCTS = [
  {
    id: 1,
    name: "Classic Rose Ribbon Bouquet",
    emoji: "🌹",
    bg: "linear-gradient(135deg,#fce4ec,#f8bbd0)",
    tag: "Ribbon Collection",
    desc: "Timeless satin rose ribbons beautifully arranged — perfect for birthdays, anniversaries & gifting.",
    price: "From Rs 500",
    badge: "⭐ Bestseller",
    badgeColor: "var(--gold)",
    cat: "ribbon",
  },
  {
    id: 2,
    name: "Pastel Tulip Ribbon Bouquet",
    emoji: "🌷",
    bg: "linear-gradient(135deg,#f3e5f5,#e1bee7)",
    tag: "Ribbon Collection",
    desc: "Soft pastel ribbon tulips with greenery — dreamy, elegant & made to last a lifetime.",
    price: "From Rs 500",
    badge: null,
    cat: "ribbon",
  },
  {
    id: 3,
    name: "Premium Mixed Ribbon Bouquet",
    emoji: "💐",
    bg: "linear-gradient(135deg,#fff8e1,#fff3cd)",
    tag: "Ribbon Collection",
    desc: "A gorgeous mix of satin ribbon flowers in harmony of colours — the ultimate statement piece.",
    price: "From Rs 700",
    badge: "✨ Popular",
    badgeColor: "var(--rose)",
    cat: "ribbon",
  },
  {
    id: 4,
    name: "Luxury Satin Sunflower Bouquet",
    emoji: "🌻",
    bg: "linear-gradient(135deg,#fffde7,#fff9c4)",
    tag: "Ribbon Collection",
    desc: "Bright, cheerful sunflower ribbon arrangements that radiate warmth and happiness.",
    price: "From Rs 600",
    badge: null,
    cat: "ribbon",
  },
  {
    id: 5,
    name: "Whimsical Wildflower Bouquet",
    emoji: "🌼",
    bg: "linear-gradient(135deg,#e8f5e9,#c8e6c9)",
    tag: "Ribbon Collection",
    desc: "A playful mix of ribbon wildflowers — ideal for graduation, celebrations & joyful occasions.",
    price: "From Rs 550",
    badge: null,
    cat: "ribbon",
  },
  {
    id: 6,
    name: "Bridal White Ribbon Bouquet",
    emoji: "🤍",
    bg: "linear-gradient(135deg,#fafafa,#f5f5f5)",
    tag: "Bridal Collection",
    desc: "Elegant all-white satin bouquet crafted for weddings and special ceremonies. A keepsake forever.",
    price: "From Rs 900",
    badge: "💍 Wedding",
    badgeColor: "var(--gold)",
    cat: "bridal",
  },
  {
    id: 7,
    name: "Money Bouquet",
    emoji: "💵",
    bg: "linear-gradient(135deg,#e8f5e9,#c8e6c9)",
    tag: "Custom Special",
    desc: "Real notes folded artistically into flower shapes with ribbon accents. The most unique gift!",
    price: "Price Negotiable",
    badge: "🎁 Custom",
    badgeColor: "var(--rose)",
    cat: "custom",
  },
  {
    id: 8,
    name: "Chocolate Bouquet",
    emoji: "🍫",
    bg: "linear-gradient(135deg,#efebe9,#d7ccc8)",
    tag: "Custom Special",
    desc: "Decadent chocolates arranged as a beautiful bouquet — a treat for eyes AND taste buds.",
    price: "Price Negotiable",
    badge: "🎁 Custom",
    badgeColor: "var(--rose)",
    cat: "custom",
  },
  {
    id: 9,
    name: "Gift & Ribbon Combo",
    emoji: "🎁",
    bg: "linear-gradient(135deg,#fce4ec,#fce9f1)",
    tag: "Custom Special",
    desc: "Combine small gifts or treats with ribbon flowers into one beautiful personalised bouquet.",
    price: "Price Negotiable",
    badge: "🎁 Custom",
    badgeColor: "var(--rose)",
    cat: "custom",
  },
];

// ── SCROLL REVEAL HOOK ─────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ── NAV ────────────────────────────────────────────────────
function Nav({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "shop", label: "Shop" },
    { id: "custom", label: "Custom" },
    { id: "contact", label: "Contact" },
  ];

  function go(p) {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <nav>
        <div className="nav-logo" onClick={() => go("home")}>
          <div className="nav-logo-circle">🎀</div>
          <div>
            <div className="nav-brand">Bouquet <span>Ghorahi</span></div>
            <div className="nav-sub">Ribbon Bouquets · Ghorahi</div>
          </div>
        </div>
        <div className="nav-links">
          {links.map((l) => (
            <button
              key={l.id}
              className={`nav-link${page === l.id ? " active" : ""}`}
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
          <button className="nav-cta" onClick={() => go("contact")}>Order Now</button>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(true)}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-overlay${menuOpen ? " open" : ""}`}>
        <button className="mob-close" onClick={() => setMenuOpen(false)}>✕</button>
        {links.map((l) => (
          <button key={l.id} className="mob-link" onClick={() => go(l.id)}>{l.label}</button>
        ))}
        <button className="nav-cta" style={{ marginTop: 8 }} onClick={() => go("contact")}>Order Now</button>
      </div>
    </>
  );
}

// ── MARQUEE STRIP ──────────────────────────────────────────
function Strip() {
  const items = ["Ribbon Bouquets","Satin Flowers","Money Bouquets","Chocolate Bouquets","Custom Orders","Handcrafted in Ghorahi","Price Negotiable","Never Wilts"];
  const doubled = [...items, ...items];
  return (
    <div className="strip">
      <div className="strip-track">
        {doubled.map((t, i) => (
          <div key={i} className="strip-item">
            <span className="strip-dot" />{t}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── FOOTER ─────────────────────────────────────────────────
function Footer({ setPage }) {
  function go(p) { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="f-brand">Bouquet <span>Ghorahi</span></div>
            <div className="f-tag">Ribbon Bouquets · Ghorahi, Nepal</div>
            <div className="f-about">
              Handcrafted ribbon and satin bouquets made with love in Ghorahi, Dang.
              We create beautiful arrangements that last forever — because some moments deserve to be remembered always.
            </div>
            <div className="f-social">
              <button className="f-soc" onClick={() => window.open(SOCIAL_LINKS.facebook, "_blank")}>👤</button>
              <button className="f-soc" onClick={() => window.open(SOCIAL_LINKS.instagram, "_blank")}>📸</button>
              <button className="f-soc" onClick={() => window.open(SOCIAL_LINKS.tiktok, "_blank")}>🎵</button>
            </div>
          </div>
          <div>
            <div className="f-heading">Pages</div>
            <div className="f-links">
              {["home","shop","custom","contact"].map((p) => (
                <button key={p} className="f-link" onClick={() => go(p)}>
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="f-heading">Our Bouquets</div>
            <div className="f-links">
              {["Rose Ribbon","Tulip Ribbon","Mixed Bouquet","Money Bouquet","Chocolate Bouquet","Bridal Bouquet"].map((n) => (
                <button key={n} className="f-link" onClick={() => go("shop")}>{n}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="f-bottom">
          <div className="f-copy">© 2025 Bouquet Ghorahi · Ghorahi, Dang, Nepal</div>
          <div className="f-copy">Handcrafted with 🎀 in Ghorahi</div>
        </div>
      </div>
    </footer>
  );
}

// ── ORDER FORM ─────────────────────────────────────────────
function OrderForm({ preselect }) {
  const [done, setDone] = useState(false);
  const [submittedPhone, setSubmittedPhone] = useState("");
  const [form, setForm] = useState({
    name: "", phone: "", bouquet: preselect || "",
    occasion: "", date: "", address: "", message: "",
  });

  useEffect(() => {
    if (preselect) setForm((f) => ({ ...f, bouquet: preselect }));
  }, [preselect]);

  function submit() {
    if (!form.name)   { alert("Please enter your name!"); return; }
    if (!form.phone)  { alert("Please enter your phone number!"); return; }
    if (!form.bouquet){ alert("Please select a bouquet type!"); return; }

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "SUCCESS") {
          setSubmittedPhone(form.phone);
          setDone(true);
        } else {
          alert("Error: " + data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send order. Please try messaging us on Facebook!");
      });
  }

  if (done) return (
    <div className="success-wrap">
      <span className="s-emoji">🎀</span>
      <div className="s-title">Order Request Sent!</div>
      <div className="s-sub">
        Thank you! We've received your order and will contact you on{" "}
        <strong>{submittedPhone}</strong> within a few hours to confirm and discuss your beautiful bouquet. 🌸
      </div>
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <button className="btn btn-dark" style={{ width: "100%", justifyContent: "center" }}
          onClick={() => window.open(SOCIAL_LINKS.facebook, "_blank")}>
          Also message us on Facebook
        </button>
        <button className="btn btn-ghost" style={{ width: "100%", justifyContent: "center", fontSize: 13 }}
          onClick={() => { setDone(false); setForm({ name:"",phone:"",bouquet:"",occasion:"",date:"",address:"",message:"" }); }}>
          Place another order
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <div className="form-heading">✨ Place Your Order</div>

      <div className="fg">
        <label className="fl">Your Full Name</label>
        <input className="fc" placeholder="e.g. Sita Sharma"
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      </div>

      <div className="fg">
        <label className="fl">Phone / WhatsApp</label>
        <input className="fc" placeholder="e.g. 9841000000"
          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      </div>

      <div className="fg">
        <label className="fl">Bouquet Type</label>
        <select className="fc" value={form.bouquet} onChange={(e) => setForm({ ...form, bouquet: e.target.value })}>
          <option value="">— Select a bouquet —</option>
          {PRODUCTS.map((p) => (
            <option key={p.id} value={p.name}>{p.emoji} {p.name}</option>
          ))}
          <option value="Fully Custom (My Own Idea)">💡 Fully Custom (My Own Idea)</option>
        </select>
      </div>

      <div className="row2">
        <div className="fg">
          <label className="fl">Occasion</label>
          <select className="fc" value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })}>
            <option value="">Select occasion</option>
            {["Birthday","Anniversary","Wedding","Graduation","Valentine's Day","Festival Gift","Just Because","Other"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="fg">
          <label className="fl">Preferred Date</label>
          <input className="fc" type="date"
            value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        </div>
      </div>

      <div className="fg">
        <label className="fl">Delivery Address in Ghorahi</label>
        <input className="fc" placeholder="e.g. Ghorahi-5, near bus park"
          value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
      </div>

      <div className="fg">
        <label className="fl">Special Requests / Message</label>
        <textarea className="fc" placeholder="Colour preferences, size, budget, or any special ideas..."
          value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>

      <button className="submit-btn" onClick={submit}>🌸 Send My Order Request</button>
      <div className="form-note">We'll contact you within a few hours to confirm & discuss pricing 🌸</div>
    </div>
  );
}

// ── HOME PAGE ──────────────────────────────────────────────
function HomePage({ setPage }) {
  useReveal();
  function go(p) { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }

  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div className="hero-grid">
            <div>
              <div className="hero-badge"><span className="pulse" /> Handcrafted in Ghorahi, Nepal</div>
              <h1 className="hero-h1">
                Bouquets that<br /><em>never wilt,</em><br /><span className="gld">forever cherished</span>
              </h1>
              <p className="hero-p">
                Exquisite ribbon & satin bouquets, handcrafted with love in Ghorahi. From classic rose
                arrangements to money bouquets, chocolate bouquets & custom creations — made just for you.
              </p>
              <div className="hero-btns">
                <button className="btn btn-dark" onClick={() => go("shop")}>✨ Explore Collection</button>
                <button className="btn btn-ghost" onClick={() => go("contact")}>Place an Order →</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-orb">🎀</div>
              <div className="ftag ft1">🌸 Ribbon Flowers</div>
              <div className="ftag ft2">✨ Never Wilts</div>
              <div className="ftag ft3">🎁 Custom Made</div>
              <div className="ftag ft4">📍 Ghorahi</div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="features reveal">
            {[
              { icon:"🎀", title:"Ribbon & Satin", sub:"Zero pollen, zero wilting — lasts forever" },
              { icon:"🎁", title:"Custom Bouquets", sub:"Money, chocolate, gifts — you name it" },
              { icon:"💰", title:"Price Negotiable", sub:"We work with every budget, just ask" },
              { icon:"⚡", title:"Fast Delivery",   sub:"Delivered across Ghorahi municipality" },
            ].map((f, i) => (
              <div key={i} className="feat">
                <div className="feat-icon">{f.icon}</div>
                <div className="feat-title">{f.title}</div>
                <div className="feat-sub">{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Strip />

      {/* PREVIEW COLLECTION */}
      <section className="section" style={{ background: "white" }}>
        <div className="wrap">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:16, marginBottom:8 }}>
            <div>
              <div className="sec-label">Our Collections</div>
              <h2 className="sec-title">Ribbon bouquets that<br /><em>last forever</em></h2>
            </div>
            <button className="btn btn-ghost" onClick={() => go("shop")} style={{ fontSize:13, padding:"11px 22px" }}>
              View All →
            </button>
          </div>
          <div className="preview-grid reveal">
            {PRODUCTS.slice(0, 3).map((p) => (
              <div key={p.id} className="prev-card" onClick={() => go("shop")}>
                <div className="prev-img" style={{ background: p.bg }}>{p.emoji}</div>
                <div className="prev-body">
                  <div className="prev-tag">{p.tag}</div>
                  <div className="prev-name">{p.name}</div>
                  <div className="prev-price">{p.price} · Negotiable</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM TEASER */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="wrap">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center" }}>
            <div className="reveal">
              <div className="sec-label">Beyond Flowers</div>
              <h2 className="sec-title">One-of-a-kind<br /><em>custom bouquets</em></h2>
              <p className="sec-sub" style={{ marginBottom:28 }}>
                Money bouquets, chocolate bouquets, gift combos — we craft experiences.
                Price is always negotiable. Just tell us your idea!
              </p>
              <button className="btn btn-dark" onClick={() => go("custom")}>See Custom Options →</button>
            </div>
            <div className="reveal" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
              {[
                { e:"💵", n:"Money Bouquet" },
                { e:"🍫", n:"Chocolate Bouquet" },
                { e:"🎁", n:"Gift Combo" },
                { e:"💡", n:"Your Own Idea" },
              ].map((c, i) => (
                <div key={i} onClick={() => go("custom")}
                  style={{ background:"white", borderRadius:18, padding:"22px 16px", textAlign:"center", cursor:"pointer", border:"1px solid rgba(212,68,122,0.08)", transition:"all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 16px 40px rgba(212,68,122,0.12)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}>
                  <div style={{ fontSize:36, marginBottom:10 }}>{c.e}</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:15, fontWeight:600, color:"var(--dark)" }}>{c.n}</div>
                  <div style={{ fontSize:11, color:"var(--gold)", fontWeight:600, marginTop:5 }}>Negotiable ✨</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section" style={{ background: "white" }}>
        <div className="wrap">
          <div className="sec-label">Happy Customers</div>
          <h2 className="sec-title">What Ghorahi<br /><em>is saying</em></h2>
          <div className="rev-grid reveal">
            {[
              { av:"P", name:"Priya Thapa",  loc:"Ghorahi-3", text:"I ordered a money bouquet for my brother's graduation and everyone was amazed! So professional and unique. Will definitely order again!" },
              { av:"R", name:"Ramesh Oli",   loc:"Ghorahi-7", text:"The ribbon bouquet for my anniversary was stunning. My wife thought they were real flowers! The quality is incredible and it lasts forever." },
              { av:"S", name:"Sunita KC",    loc:"Ghorahi-1", text:"Super responsive on Facebook and helped me choose within my budget. Fast delivery too. Highly recommend to everyone in Ghorahi!" },
            ].map((r, i) => (
              <div key={i} className="rev-card">
                <div className="rev-stars">★★★★★</div>
                <div className="rev-text">"{r.text}"</div>
                <div className="rev-author">
                  <div className="rev-av">{r.av}</div>
                  <div>
                    <div className="rev-name">{r.name}</div>
                    <div className="rev-loc">{r.loc}, Dang</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background:"var(--dark)", padding:"70px 0", textAlign:"center" }}>
        <div className="wrap">
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(30px,4vw,50px)", fontWeight:300, color:"white", marginBottom:14, lineHeight:1.15 }}>
            Ready to order your <em style={{ color:"var(--rose2)" }}>dream bouquet?</em>
          </div>
          <p style={{ fontSize:15, color:"rgba(255,255,255,0.55)", marginBottom:30, fontWeight:300 }}>
            Handcrafted in Ghorahi · Price always negotiable · Fast response
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <button className="btn btn-rose" onClick={() => go("contact")}>🌸 Place an Order</button>
            <button className="btn btn-ghost" style={{ borderColor:"rgba(255,255,255,0.2)", color:"rgba(255,255,255,0.7)" }} onClick={() => go("shop")}>Browse Collection</button>
          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}

// ── SHOP PAGE ──────────────────────────────────────────────
function ShopPage({ setPage }) {
  const [filter, setFilter] = useState("all");
  useReveal();
  function go(p) { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }

  const cats = [
    { id:"all",    label:"All Bouquets" },
    { id:"ribbon", label:"🎀 Ribbon" },
    { id:"bridal", label:"💍 Bridal" },
    { id:"custom", label:"🎁 Custom" },
  ];
  const visible = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === filter);

  return (
    <div className="page-enter">
      <div className="shop-hero">
        <div className="wrap">
          <div className="sec-label" style={{ justifyContent:"center", color:"var(--rose2)" }}>Our Collection</div>
          <h2 className="sec-title" style={{ textAlign:"center" }}>Handcrafted <em>ribbon bouquets</em></h2>
          <p className="sec-sub" style={{ textAlign:"center", margin:"0 auto", color:"rgba(255,255,255,0.55)" }}>
            Each piece is hand-assembled with premium satin ribbons in Ghorahi. Zero pollen, zero wilting, 100% beautiful — forever.
          </p>
        </div>
      </div>
      <Strip />
      <div className="wrap" style={{ paddingTop:40, paddingBottom:80 }}>
        <div className="filter-bar">
          {cats.map((c) => (
            <button key={c.id} className={`filter-btn${filter === c.id ? " on" : ""}`} onClick={() => setFilter(c.id)}>
              {c.label}
            </button>
          ))}
        </div>
        <div className="shop-grid reveal">
          {visible.map((p) => (
            <div key={p.id} className="shop-card">
              {p.badge && <div className="bestseller" style={{ background: p.badgeColor }}>{p.badge}</div>}
              <div className="shop-img" style={{ background: p.bg }}>{p.emoji}</div>
              <div className="shop-body">
                <div className="shop-tagline">{p.tag}</div>
                <div className="shop-name">{p.name}</div>
                <div className="shop-desc">{p.desc}</div>
                <div className="shop-footer">
                  <div className="shop-price">{p.price} <small>/ negotiable</small></div>
                  <button className="shop-add" onClick={() => { setPage("contact"); window.scrollTo({top:0,behavior:"smooth"}); }}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="neg-note reveal">
          <div className="neg-icon">💰</div>
          <div>
            <div className="neg-title">All prices are negotiable!</div>
            <div className="neg-sub">
              Every bouquet is handcrafted and unique — prices vary by size, materials, and customisation.
              Message us with your budget and ideas and we will create something beautiful that works perfectly for you.
            </div>
          </div>
        </div>
        <div style={{ marginTop:40, textAlign:"center" }}>
          <p style={{ color:"var(--muted)", fontSize:14, marginBottom:16, fontWeight:300 }}>Don't see what you're looking for? We do fully custom orders!</p>
          <button className="btn btn-dark" onClick={() => go("custom")}>🎁 View Custom Bouquets →</button>
        </div>
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}

// ── CUSTOM PAGE ────────────────────────────────────────────
function CustomPage({ setPage }) {
  useReveal();
  function go(p) { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }

  const customs = [
    { icon:"💵", name:"Money Bouquet",         desc:"A stunning arrangement featuring real notes folded artistically into flower shapes with ribbon accents. The most unique and memorable gift for birthdays, graduation & special milestones. Choose the denomination and we handle the rest!" },
    { icon:"🍫", name:"Chocolate Bouquet",      desc:"Decadent chocolates wrapped and arranged as a beautiful bouquet — a treat for the eyes AND the taste buds. Choose your favourite chocolate brands and we'll craft an incredible arrangement around them." },
    { icon:"🎁", name:"Gift & Ribbon Combo",    desc:"Combine small gifts, treats, snacks, or meaningful personal items with our ribbon flowers into one stunning bouquet. Completely personalised to your story, your person, and your occasion." },
    { icon:"💍", name:"Bridal & Wedding Set",   desc:"Complete bridal ribbon bouquets and matching accessories for your special day. White, ivory, or any colour theme — we'll craft a keepsake bouquet that lasts long after your wedding day." },
    { icon:"🎓", name:"Graduation Bouquet",     desc:"Celebrate academic achievements in style! Ribbon bouquets in school or university colours, with personalised ribbons and decorative elements to make the graduate feel extra special." },
    { icon:"💡", name:"Fully Custom — Your Idea", desc:"Have something completely different in mind? We love creative challenges! Share your concept — colours, theme, items to include, occasion — and we will bring your vision to life. No idea too unique." },
  ];

  return (
    <div className="page-enter">
      <div className="custom-hero pt">
        <div className="wrap">
          <div className="sec-label">Beyond Flowers</div>
          <h1 className="sec-title" style={{ maxWidth:520 }}>One-of-a-kind <em>custom bouquets</em></h1>
          <p className="sec-sub">We don't just make flower bouquets — we craft experiences. Tell us your idea and we'll bring it to life. All prices are fully negotiable.</p>
        </div>
      </div>

      <section className="section" style={{ background:"white" }}>
        <div className="wrap">
          <div className="sec-label">Custom Options</div>
          <h2 className="sec-title">What can we<br /><em>create for you?</em></h2>
          <div className="custom-cards reveal">
            {customs.map((c, i) => (
              <div key={i} className="cust-card" onClick={() => go("contact")}>
                <div className="cust-icon">{c.icon}</div>
                <div>
                  <div className="cust-name">{c.name}</div>
                  <div className="cust-desc">{c.desc}</div>
                  <div className="cust-pill">✨ Price Negotiable — DM us to discuss</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background:"var(--dark)" }}>
        <div className="wrap">
          <div className="sec-label" style={{ color:"var(--rose2)" }}>Simple Process</div>
          <h2 className="sec-title" style={{ color:"white" }}>How custom orders<br /><em>work</em></h2>
          <div className="process-steps reveal">
            {[
              { n:"01", e:"💬", title:"Tell Us Your Idea",  desc:"Message us on Facebook, Instagram, TikTok — or fill the order form. Share your concept, occasion, and budget." },
              { n:"02", e:"🎨", title:"We Design It",       desc:"We discuss the details, suggest options, agree on a price, and begin crafting your unique bouquet." },
              { n:"03", e:"🎀", title:"Handcrafted",        desc:"Your custom bouquet is carefully handmade with premium ribbons and materials right here in Ghorahi." },
              { n:"04", e:"🚚", title:"Delivered to You",   desc:"Your masterpiece is delivered to your door in Ghorahi. Unwrap and cherish it — it lasts forever!" },
            ].map((s, i) => (
              <div key={i} className="proc-step">
                <div className="proc-num">{s.n}</div>
                <div className="proc-emoji">{s.e}</div>
                <div className="proc-title">{s.title}</div>
                <div className="proc-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:"var(--cream)", padding:"70px 0", textAlign:"center" }}>
        <div className="wrap">
          <h2 className="sec-title" style={{ marginBottom:10 }}>Ready to create something <em>magical?</em></h2>
          <p style={{ color:"var(--muted)", fontSize:15, marginBottom:28, fontWeight:300 }}>
            Message us anywhere — Facebook, Instagram, TikTok — or use our order form. We'll reply fast!
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <button className="btn btn-dark" onClick={() => go("contact")}>📝 Fill Order Form</button>
            <button className="btn btn-ghost" onClick={() => window.open(SOCIAL_LINKS.facebook, "_blank")}>💬 Message on Facebook</button>
          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}

// ── CONTACT PAGE ───────────────────────────────────────────
function ContactPage({ setPage, preselect }) {
  useReveal();
  return (
    <div className="page-enter">
      <div className="contact-hero">
        <div className="wrap">
          <div className="sec-label" style={{ justifyContent:"center", color:"var(--rose2)" }}>Get in Touch</div>
          <h1 className="sec-title" style={{ textAlign:"center", color:"white" }}>Order your <em>perfect bouquet</em></h1>
          <p className="sec-sub" style={{ textAlign:"center", margin:"0 auto", color:"rgba(255,255,255,0.55)" }}>
            Fill the form below or reach us on any social platform. We're always online and reply fast!
          </p>
        </div>
      </div>
      <Strip />
      <section className="section" style={{ background:"var(--cream)" }}>
        <div className="wrap">
          <div className="contact-grid">
            {/* LEFT — socials & info */}
            <div>
              <div className="sec-label">Find Us Online</div>
              <h2 className="sec-title" style={{ marginBottom:22 }}>Connect on<br /><em>any platform</em></h2>
              <div className="social-cards">
                {[
                  { cls:"soc-fb", icon:"👤", name:"Facebook",  sub:"Message us · View our gallery",        url: SOCIAL_LINKS.facebook },
                  { cls:"soc-ig", icon:"📸", name:"Instagram", sub:"See our latest creations",             url: SOCIAL_LINKS.instagram },
                  { cls:"soc-tk", icon:"🎵", name:"TikTok",    sub:"Watch bouquet making videos",          url: SOCIAL_LINKS.tiktok },
                  { cls:"soc-wa", icon:"💬", name:"WhatsApp",  sub:"Chat directly with us",               url: SOCIAL_LINKS.whatsapp },
                ].map((s, i) => (
                  <a key={i} className="soc-card" href={s.url} target="_blank" rel="noopener noreferrer">
                    <div className={`soc-icon ${s.cls}`}>{s.icon}</div>
                    <div>
                      <div className="soc-name">{s.name}</div>
                      <div className="soc-sub">{s.sub}</div>
                    </div>
                    <div className="soc-arrow">→</div>
                  </a>
                ))}
              </div>
              <div className="info-blocks" style={{ marginTop:26 }}>
                {[
                  { icon:"📍", title:"Based in Ghorahi, Dang",    sub: CONTACT_INFO.deliveryArea },
                  { icon:"🎀", title:"Ribbon & Satin Bouquets",    sub:"Handcrafted — lasts forever, never wilts" },
                  { icon:"💰", title:"Price Always Negotiable",     sub:"We work with every budget. Just ask!" },
                  { icon:"⚡", title:"Fast Response",               sub:"We reply within hours on all platforms" },
                ].map((b, i) => (
                  <div key={i} className="info-b">
                    <div className="info-b-icon">{b.icon}</div>
                    <div>
                      <div className="info-b-title">{b.title}</div>
                      <div className="info-b-sub">{b.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — order form */}
            <div className="order-form-wrap reveal">
              <OrderForm preselect={preselect} />
            </div>
          </div>
        </div>
      </section>
      <Footer setPage={setPage} />
    </div>
  );
}

// ── ROOT APP ───────────────────────────────────────────────
function App() {
  const [page, setPage] = useState("home");
  const [preselect, setPreselect] = useState("");

  return (
    <>
      <Nav page={page} setPage={setPage} />
      {page === "home"    && <HomePage    setPage={setPage} />}
      {page === "shop"    && <ShopPage    setPage={setPage} />}
      {page === "custom"  && <CustomPage  setPage={setPage} />}
      {page === "contact" && <ContactPage setPage={setPage} preselect={preselect} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
