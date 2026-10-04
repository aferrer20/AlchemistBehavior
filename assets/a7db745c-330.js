function Hero({ onCTAClick, ctaLabel = "Book your Quantum Shift call", accentTape = "yellow", showSparkles = true }) {
  var _a;
  return /* @__PURE__ */ React.createElement("section", { id: "top", style: {
    position: "relative",
    minHeight: "92vh",
    background: `radial-gradient(circle at 50% 55%, var(--hero-grad-start, #FF8B5C) 0%, #FF5BA0 35%, #C957C9 70%, var(--hero-grad-end, #9F4FB8) 100%)`,
    paddingTop: 40,
    paddingBottom: 60,
    overflow: "hidden"
  } }, showSparkles && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: "12%", left: "8%" }, className: "sparkle-float" }, /* @__PURE__ */ React.createElement(Sparkle, { size: 36, color: "var(--neon-yellow)" })), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: "22%", right: "12%", animationDelay: "1.2s" }, className: "sparkle-float" }, /* @__PURE__ */ React.createElement(Sparkle, { size: 26, color: "var(--neon-cyan)" })), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: "18%", left: "14%", animationDelay: "0.6s" }, className: "sparkle-float" }, /* @__PURE__ */ React.createElement(Sparkle, { size: 20, color: "var(--neon-yellow)" })), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: "60%", right: "8%", animationDelay: "2s" }, className: "sparkle-float" }, /* @__PURE__ */ React.createElement(Moon, { size: 32, color: "var(--neon-yellow)" }))), /* @__PURE__ */ React.createElement("div", { className: "hero-grid", style: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 32px",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: 48,
    alignItems: "center",
    minHeight: "76vh"
  } }, /* @__PURE__ */ React.createElement("div", { style: { color: "#fff", textShadow: "0 2px 0 rgba(0,0,0,0.18)" } }, /* @__PURE__ */ React.createElement("div", { className: "hero-eyebrow", style: {
    fontFamily: "var(--font-display)",
    fontSize: 14,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--neon-yellow)",
    marginBottom: 20,
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "rgba(0,0,0,0.18)",
    padding: "8px 14px",
    borderRadius: 999,
    border: "2px solid rgba(247,232,75,0.5)",
    textShadow: "none"
  } }, /* @__PURE__ */ React.createElement(Bolt, { size: 16, color: "var(--neon-yellow)" }), "Now booking \xB7 Spring 2026 cohort"), /* @__PURE__ */ React.createElement("h1", { style: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(56px, 8vw, 112px)",
    lineHeight: 0.92,
    textTransform: "uppercase",
    margin: "0 0 14px",
    letterSpacing: "-0.005em"
  } }, "Become the", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Tape, { color: accentTape, rotate: -2 }, "magnetic"), " ", /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-italic)", fontStyle: "italic", fontWeight: 700, textTransform: "none" } }, "version"), /* @__PURE__ */ React.createElement("br", null), "of you."), /* @__PURE__ */ React.createElement("p", { style: {
    fontFamily: "var(--font-body)",
    fontSize: 21,
    lineHeight: 1.5,
    maxWidth: 520,
    margin: "0 0 28px",
    color: "#fff",
    textShadow: "0 1px 0 rgba(0,0,0,0.2)"
  } }, "The 3-Month ", /* @__PURE__ */ React.createElement("strong", { style: { fontStyle: "italic" } }, "Quantum Shift"), " Program with Amanda Ferrer. Weekly check-ins, life coaching, business consulting \u2014 and at the end? You're not living the same life.", /* @__PURE__ */ React.createElement("em", null, " You're not even the same person.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" } }, /* @__PURE__ */ React.createElement("button", { className: "btn-pop", onClick: onCTAClick, style: { fontSize: 19 } }, ctaLabel, " ", /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u2192")), /* @__PURE__ */ React.createElement("a", { href: "#book", style: {
    fontFamily: "var(--font-display)",
    fontSize: 14,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--neon-yellow)",
    textDecoration: "underline",
    textDecorationThickness: 2,
    textUnderlineOffset: 6
  } }, "or read the book first")), /* @__PURE__ */ React.createElement("div", { className: "hero-stats", style: { display: "flex", gap: 22, marginTop: 36, flexWrap: "wrap" } }, [
    ["12 wk", "of weekly 1:1 coaching"],
    ["1", "completely new timeline"]
  ].map(([n, l]) => /* @__PURE__ */ React.createElement("div", { key: l }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 38, lineHeight: 1, color: "var(--neon-yellow)", textShadow: "none" } }, n), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: 14, color: "rgba(255,255,255,0.85)", marginTop: 2 } }, l))))), /* @__PURE__ */ React.createElement("div", { className: "hero-book-wrap", style: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { className: "hero-halo", style: {
    position: "absolute",
    width: 380,
    height: 380,
    borderRadius: 999,
    background: "radial-gradient(circle, rgba(247,232,75,0.5) 0%, rgba(247,232,75,0) 70%)",
    filter: "blur(8px)"
  } }), /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        transform: "rotate(-4deg)",
        transition: "transform 320ms cubic-bezier(.34,1.56,.64,1)"
      },
      onMouseEnter: (e) => e.currentTarget.style.transform = "rotate(2deg) scale(1.03)",
      onMouseLeave: (e) => e.currentTarget.style.transform = "rotate(-4deg)"
    },
    /* @__PURE__ */ React.createElement(
      "img",
      {
        src: ((_a = window.__resources) == null ? void 0 : _a.bookCover) || "assets/book-cover.webp",
        alt: "Alchemist Behavior \u2014 A Guide to Becoming a Master Manifestor",
        style: {
          width: 320,
          height: "auto",
          borderRadius: 8,
          boxShadow: "8px 8px 0 #1A1213, 14px 14px 0 var(--neon-yellow)",
          border: "3px solid #1A1213"
        }
      }
    )
  ), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: -10, right: -10 } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--neon-yellow)",
    border: "2.5px solid #1A1213",
    borderRadius: 999,
    padding: "10px 18px",
    fontFamily: "var(--font-display)",
    fontSize: 14,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#1A1213",
    transform: "rotate(8deg)",
    boxShadow: "4px 4px 0 #1A1213"
  } }, "New release")))));
}
Object.assign(window, { Hero });
