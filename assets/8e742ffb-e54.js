function BookSection() {
  var _a;
  const chapters = [
    "Understanding Manifestation",
    "The Power of Self-Concept",
    "Releasing Limiting Beliefs",
    "Gratitude as Your Magnet",
    "Visualization & Vision Boards",
    "Manifesting Money, Love & Career",
    "Staying in High Vibration",
    "Taking Aligned Action",
    "Your 30-Day Manifestation Plan"
  ];
  const [orderOpen, setOrderOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");
  return /* @__PURE__ */ React.createElement("section", { id: "book", className: "section", style: { background: "#FFEFC8" } }, /* @__PURE__ */ React.createElement("div", { className: "section__inner book-grid", style: { display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { transform: "rotate(-4deg)" } }, /* @__PURE__ */ React.createElement("img", { src: ((_a = window.__resources) == null ? void 0 : _a.bookCover) || "assets/book-cover.webp", alt: "Book cover", style: { width: 300, borderRadius: 8, border: "3px solid #1A1213", boxShadow: "8px 8px 0 #1A1213, 14px 14px 0 #7BE0E8" } }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { color: "#E04F8E", marginBottom: 12 } }, "The book"), /* @__PURE__ */ React.createElement("h2", { className: "s-h1", style: { color: "#1A1213" } }, "Read the", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Tape, { color: "yellow", rotate: -2 }, "guide"), " first."), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55, color: "#1A1213", maxWidth: 540, marginTop: 18 } }, /* @__PURE__ */ React.createElement("em", null, "Alchemist Behavior: A Guide to Becoming a Master Manifestor"), " is the playbook. 9 chapters, 55 pages, and one 30-day plan that flips the script on what you thought was possible for your life."), /* @__PURE__ */ React.createElement("div", { className: "chapters-grid", style: { marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" } }, chapters.map((c, i) => /* @__PURE__ */ React.createElement("div", { key: c, style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 28,
    height: 28,
    borderRadius: 999,
    background: ["#FF6FA8", "#7BE0E8", "#D8FF3C", "#FF8B5C", "#9E85C8"][i % 5],
    border: "2px solid #1A1213",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-display)",
    fontSize: 14,
    color: "#1A1213",
    flexShrink: 0
  } }, i + 1), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-body)", fontSize: 15, color: "#1A1213" } }, c)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" } }, /* @__PURE__ */ React.createElement("button", { className: "btn-pop", onClick: () => {
    setOrderOpen(true);
    setSubmitted(false);
  } }, "Get the book \u2014 $22")))), orderOpen && /* @__PURE__ */ React.createElement("div", { className: "modal-backdrop", onClick: () => setOrderOpen(false) }, /* @__PURE__ */ React.createElement("div", { className: "modal celebrate", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { onClick: () => setOrderOpen(false), "aria-label": "Close", style: { position: "absolute", top: 14, right: 14, background: "#FF6FA8", border: "2.5px solid #1A1213", borderRadius: 999, width: 32, height: 32, fontFamily: "var(--font-display)", fontSize: 20, lineHeight: 1, cursor: "pointer", boxShadow: "2px 2px 0 #1A1213" } }, "\xD7"), !submitted ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { color: "#E04F8E", marginBottom: 8 } }, "Order the book"), /* @__PURE__ */ React.createElement("h3", { style: { fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1, textTransform: "uppercase", color: "#1A1213", margin: 0 } }, "Alchemist Behavior \u2014 $22"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-italic)", fontStyle: "italic", fontSize: 15, color: "#1A1213", marginTop: 8, marginBottom: 18 } }, "Signed copies. Ships within 5 business days."), /* @__PURE__ */ React.createElement("form", { onSubmit: async (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/xwvydndk", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "New book order \u2014 Alchemist Behavior",
          Name: f.Name.value,
          Email: f.Email.value,
          Address: f.Address.value,
          Quantity: f.Quantity.value,
          Inscription: f.Inscription.value || "(none)"
        })
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Try again or email Amanda directly.");
      }
    } catch (err) {
      setError("Connection issue. Try again or email Amanda directly.");
    } finally {
      setSubmitting(false);
    }
  }, style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 5 } }, "Full name"), /* @__PURE__ */ React.createElement("input", { required: true, name: "Name", type: "text", style: { width: "100%", fontFamily: "var(--font-body)", fontSize: 16, padding: "10px 14px", border: "2.5px solid #1A1213", borderRadius: 12, background: "#fff", boxShadow: "4px 4px 0 #1A1213", outline: "none" } })), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 5 } }, "Email"), /* @__PURE__ */ React.createElement("input", { required: true, name: "Email", type: "email", style: { width: "100%", fontFamily: "var(--font-body)", fontSize: 16, padding: "10px 14px", border: "2.5px solid #1A1213", borderRadius: 12, background: "#fff", boxShadow: "4px 4px 0 #1A1213", outline: "none" } })), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 5 } }, "Shipping address"), /* @__PURE__ */ React.createElement("textarea", { required: true, name: "Address", rows: "3", placeholder: "Street, City, State, ZIP, Country", style: { width: "100%", fontFamily: "var(--font-body)", fontSize: 16, padding: "10px 14px", border: "2.5px solid #1A1213", borderRadius: 12, background: "#fff", boxShadow: "4px 4px 0 #1A1213", outline: "none", resize: "none" } })), /* @__PURE__ */ React.createElement("div", { className: "order-form-row", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 5 } }, "Quantity"), /* @__PURE__ */ React.createElement("input", { required: true, name: "Quantity", type: "number", min: "1", defaultValue: "1", style: { width: "100%", fontFamily: "var(--font-body)", fontSize: 16, padding: "10px 14px", border: "2.5px solid #1A1213", borderRadius: 12, background: "#fff", boxShadow: "4px 4px 0 #1A1213", outline: "none" } })), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 5 } }, "Personalize to"), /* @__PURE__ */ React.createElement("input", { name: "Inscription", type: "text", placeholder: "(optional)", style: { width: "100%", fontFamily: "var(--font-body)", fontSize: 16, padding: "10px 14px", border: "2.5px solid #1A1213", borderRadius: 12, background: "#fff", boxShadow: "4px 4px 0 #1A1213", outline: "none" } }))), /* @__PURE__ */ React.createElement("button", { type: "submit", disabled: submitting, className: "btn-pop", style: { marginTop: 8, justifyContent: "center", opacity: submitting ? 0.6 : 1 } }, submitting ? "Sending\u2026" : "Place order"), error && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-body)", fontSize: 13, color: "#E15549", textAlign: "center" } }, error), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-italic)", fontStyle: "italic", fontSize: 13, color: "rgba(26,18,19,0.7)", textAlign: "center", marginTop: 4 } }, "Amanda will email you a payment link within 24 hours."))) : /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "12px 8px" } }, /* @__PURE__ */ React.createElement("h3", { style: { fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1, textTransform: "uppercase", color: "#1A1213", margin: "4px 0 8px" } }, "Order received."), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-italic)", fontStyle: "italic", fontSize: 17, color: "#1A1213" } }, "Amanda will email you a payment link within 24 hours."), /* @__PURE__ */ React.createElement("button", { onClick: () => setOrderOpen(false), className: "btn-pop btn-pop--cyan", style: { marginTop: 16 } }, "Back to the page")))));
}
Object.assign(window, { BookSection });
