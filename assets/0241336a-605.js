function Nav({ onCTAClick }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState("top");
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["program", "book", "testimonials", "faq"];
      const y = window.scrollY + 200;
      let cur = "top";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const linkStyle = (id) => ({
    fontFamily: "var(--font-display)",
    fontSize: 14,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: active === id ? "var(--neon-magenta)" : "#1A1213",
    textDecoration: "none",
    padding: "8px 4px",
    transition: "color 140ms"
  });
  return /* @__PURE__ */ React.createElement("nav", { style: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: scrolled ? "rgba(255,244,227,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(8px)" : "none",
    borderBottom: scrolled ? "2px solid #1A1213" : "2px solid transparent",
    transition: "all 200ms"
  } }, /* @__PURE__ */ React.createElement("div", { className: "nav-inner", style: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 32px"
  } }, /* @__PURE__ */ React.createElement("a", { href: "#top", style: { textDecoration: "none", color: "#1A1213", display: "flex", alignItems: "baseline", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { className: "nav-brand-text", style: { fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1, textTransform: "uppercase" } }, "Alchemist Behavior"), /* @__PURE__ */ React.createElement(Sparkle, { size: 16, color: "var(--neon-magenta)" })), /* @__PURE__ */ React.createElement("div", { className: "nav-links", style: { display: "flex", gap: 28, alignItems: "center" } }, /* @__PURE__ */ React.createElement("a", { href: "#program", style: linkStyle("program") }, "Program"), /* @__PURE__ */ React.createElement("a", { href: "#book", style: linkStyle("book") }, "Book"), /* @__PURE__ */ React.createElement("a", { href: "#testimonials", style: linkStyle("testimonials") }, "Stories"), /* @__PURE__ */ React.createElement("a", { href: "#faq", style: linkStyle("faq") }, "FAQ"), /* @__PURE__ */ React.createElement("button", { className: "btn-pop btn-pop--pink nav-cta", style: { fontSize: 13, padding: "10px 16px" }, onClick: onCTAClick }, "Book a call \u2192"))));
}
Object.assign(window, { Nav });
