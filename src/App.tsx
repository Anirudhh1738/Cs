import React, { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  const clr = {
    bg: "#0a0a0f",
    card: "#13131a",
    border: "#1e1e2e",
    accent: "#7c3aed",
    accentLight: "#a78bfa",
    gold: "#f59e0b",
    text: "#f0f0f0",
    sub: "#888",
  };

  const services = [
    { icon: "🏢", title: "Company Incorporation", desc: "Private Limited, LLP, OPC — end-to-end company registration with MCA compliance." },
    { icon: "📋", title: "Secretarial Compliance", desc: "Annual filings, board meetings, ROC compliance, and statutory registers maintenance." },
    { icon: "⚖️", title: "Legal Documentation", desc: "Drafting of MOA, AOA, shareholder agreements, and all corporate legal documents." },
    { icon: "📊", title: "GST & Tax Advisory", desc: "GST registration, filing, and comprehensive tax planning for businesses." },
    { icon: "🔄", title: "Due Diligence", desc: "Corporate due diligence, legal audits, and compliance health checks." },
    { icon: "🛡️", title: "Trademark & IP", desc: "Trademark registration, IP protection, and brand legal advisory services." },
  ];

  const stats = [
    { num: "500+", label: "Clients Served" },
    { num: "15+", label: "Years Experience" },
    { num: "98%", label: "Success Rate" },
    { num: "50+", label: "Cities Covered" },
  ];

  return (
    <div style={{ background: clr.bg, color: clr.text, fontFamily: "'Segoe UI', system-ui, sans-serif", minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(10,10,15,0.95)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${clr.border}`, padding: "0 40px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "68px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", background: `linear-gradient(135deg, ${clr.accent}, ${clr.gold})`, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>⚖️</div>
          <div>
            <div style={{ fontWeight: "800", fontSize: "1rem", letterSpacing: "-0.5px" }}>Tanand Rayakari</div>
            <div style={{ fontSize: "0.65rem", color: clr.gold, letterSpacing: "2px", textTransform: "uppercase" }}>Company Secretary</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          {["Home", "Services", "About", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: clr.sub, textDecoration: "none", fontSize: "0.9rem", fontWeight: "500" }}
              onMouseEnter={e => (e.currentTarget.style.color = clr.accentLight)}
              onMouseLeave={e => (e.currentTarget.style.color = clr.sub)}
            >{item}</a>
          ))}
        </div>
        <a href="#contact" style={{ padding: "9px 22px", borderRadius: "8px", background: clr.accent, color: "#fff", textDecoration: "none", fontWeight: "700", fontSize: "0.88rem" }}>Get Consultation</a>
      </nav>

      {/* Hero */}
      <div id="home" style={{ minHeight: "92vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", background: `radial-gradient(circle, ${clr.accent}15, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: clr.card, border: `1px solid ${clr.border}`, borderRadius: "50px", padding: "6px 16px", fontSize: "0.8rem", color: clr.gold, marginBottom: "28px", fontWeight: "600" }}>
          <span>✦</span> ACS | Fellow Member of ICSI
        </div>
        <h1 style={{ fontSize: "3.8rem", fontWeight: "900", lineHeight: 1.1, marginBottom: "20px", letterSpacing: "-2px", maxWidth: "800px" }}>
          Corporate Legal Excellence<br />
          <span style={{ background: `linear-gradient(135deg, ${clr.accent}, ${clr.gold})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Built on Trust
          </span>
        </h1>
        <p style={{ fontSize: "1.1rem", color: clr.sub, maxWidth: "520px", lineHeight: 1.7, marginBottom: "40px" }}>
          Providing comprehensive company secretarial, legal compliance, and corporate advisory services to businesses across India.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#contact" style={{ padding: "14px 32px", borderRadius: "10px", background: clr.accent, color: "#fff", textDecoration: "none", fontWeight: "700", fontSize: "1rem" }}>Book Free Consultation</a>
          <a href="#services" style={{ padding: "14px 32px", borderRadius: "10px", border: `1px solid ${clr.border}`, color: clr.text, textDecoration: "none", fontWeight: "600", fontSize: "1rem" }}>View Services</a>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: clr.card, borderTop: `1px solid ${clr.border}`, borderBottom: `1px solid ${clr.border}`, padding: "48px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px", textAlign: "center" }}>
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: "2.4rem", fontWeight: "900", background: `linear-gradient(135deg, ${clr.accent}, ${clr.gold})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
              <div style={{ color: clr.sub, fontSize: "0.85rem", marginTop: "4px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div id="services" style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ color: clr.accent, fontSize: "0.8rem", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>What We Offer</div>
          <h2 style={{ fontSize: "2.4rem", fontWeight: "900", letterSpacing: "-1px" }}>Our Services</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {services.map(s => (
            <div key={s.title}
              style={{ background: clr.card, border: `1px solid ${clr.border}`, borderRadius: "16px", padding: "28px", cursor: "default", transition: "border 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = clr.accent)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = clr.border)}
            >
              <div style={{ fontSize: "2rem", marginBottom: "14px" }}>{s.icon}</div>
              <div style={{ fontWeight: "700", fontSize: "1rem", marginBottom: "10px" }}>{s.title}</div>
              <div style={{ color: clr.sub, fontSize: "0.85rem", lineHeight: 1.7 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div id="about" style={{ background: clr.card, borderTop: `1px solid ${clr.border}`, borderBottom: `1px solid ${clr.border}` }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <div style={{ color: clr.accent, fontSize: "0.8rem", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>About</div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: "900", letterSpacing: "-1px", marginBottom: "20px" }}>Tanand Rayakari</h2>
            <p style={{ color: clr.sub, lineHeight: 1.8, marginBottom: "16px", fontSize: "0.95rem" }}>
              A qualified Company Secretary with over 15 years of experience in corporate law, compliance, and secretarial practice. Associate Member of the Institute of Company Secretaries of India (ICSI).
            </p>
            <p style={{ color: clr.sub, lineHeight: 1.8, fontSize: "0.95rem" }}>
              Specializing in corporate governance, regulatory compliance, and providing strategic legal advisory to startups, MSMEs, and large corporations across multiple sectors.
            </p>
            <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {["ICSI Member", "MCA Expert", "SEBI Compliance", "Corporate Law"].map(tag => (
                <span key={tag} style={{ padding: "5px 14px", borderRadius: "20px", background: `${clr.accent}20`, color: clr.accentLight, fontSize: "0.8rem", fontWeight: "600" }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ background: clr.bg, borderRadius: "20px", border: `1px solid ${clr.border}`, padding: "32px", textAlign: "center" }}>
            <div style={{ width: "80px", height: "80px", background: `linear-gradient(135deg, ${clr.accent}, ${clr.gold})`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 20px" }}>👨‍💼</div>
            <div style={{ fontWeight: "800", fontSize: "1.2rem", marginBottom: "4px" }}>Tanand Rayakari</div>
            <div style={{ color: clr.gold, fontSize: "0.85rem", fontWeight: "600", marginBottom: "20px" }}>ACS, Company Secretary</div>
            <div style={{ borderTop: `1px solid ${clr.border}`, paddingTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: clr.sub, fontSize: "0.85rem" }}>
                <span>📧</span> tanand@gmail.com
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: clr.sub, fontSize: "0.85rem" }}>
                <span>📍</span> India
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: clr.sub, fontSize: "0.85rem" }}>
                <span>🕐</span> Mon–Sat, 9AM–6PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" style={{ maxWidth: "700px", margin: "0 auto", padding: "80px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ color: clr.accent, fontSize: "0.8rem", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Get In Touch</div>
          <h2 style={{ fontSize: "2.4rem", fontWeight: "900", letterSpacing: "-1px" }}>Book a Consultation</h2>
          <p style={{ color: clr.sub, marginTop: "12px" }}>Free 30-minute consultation for new clients</p>
        </div>

        {sent ? (
          <div style={{ background: "#052e16", border: "1px solid #166534", borderRadius: "16px", padding: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
            <div style={{ fontWeight: "700", fontSize: "1.2rem", color: "#4ade80" }}>Message Sent!</div>
            <div style={{ color: clr.sub, marginTop: "8px" }}>We'll get back to you within 24 hours.</div>
          </div>
        ) : (
          <div style={{ background: clr.card, border: `1px solid ${clr.border}`, borderRadius: "20px", padding: "40px" }}>
            {["name", "email", "message"].map(field => (
              <div key={field} style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", color: clr.sub, fontSize: "0.82rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                  {field === "name" ? "Your Name" : field === "email" ? "Email Address" : "Message"}
                </label>
                {field === "message" ? (
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="How can we help you?"
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: `1.5px solid ${clr.border}`, background: clr.bg, color: clr.text, fontSize: "0.95rem", outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={form[field as "name" | "email"]}
                    onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
                    placeholder={field === "name" ? "John Doe" : "john@example.com"}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: `1.5px solid ${clr.border}`, background: clr.bg, color: clr.text, fontSize: "0.95rem", outline: "none", boxSizing: "border-box" }}
                  />
                )}
              </div>
            ))}
            <button onClick={handleSubmit} style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "none", background: clr.accent, color: "#fff", fontWeight: "700", fontSize: "1rem", cursor: "pointer" }}>
              Send Message →
            </button>
            <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: `1px solid ${clr.border}`, display: "flex", justifyContent: "center", gap: "32px" }}>
              <a href="mailto:tanand@gmail.com" style={{ color: clr.sub, textDecoration: "none", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px" }}>📧 tanand@gmail.com</a>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ borderTop: `1px solid ${clr.border}`, padding: "28px 40px", textAlign: "center", color: clr.sub, fontSize: "0.85rem" }}>
        © {new Date().getFullYear()} Tanand Rayakari, Company Secretary. All rights reserved.
      </div>

    </div>
  );
}