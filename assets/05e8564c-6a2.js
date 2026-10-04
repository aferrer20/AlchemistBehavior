const TWEAK_DEFAULTS = (
  /*EDITMODE-BEGIN*/
  {
    "marqueeBg": "#1A1213",
    "marqueeSpeed": 48,
    "heroGradientStart": "#FF8B5C",
    "heroGradientEnd": "#9F4FB8",
    "accentTape": "yellow",
    "showSparkles": true,
    "ctaLabel": "Book your Quantum Shift call"
  }
);
function BookingModal({ onClose }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");
  return /* @__PURE__ */ React.createElement("div", { className: "modal-backdrop", onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "modal celebrate", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { onClick: onClose, "aria-label": "Close", style: { position: "absolute", top: 14, right: 14, background: "#FF6FA8", border: "2.5px solid #1A1213", borderRadius: 999, width: 32, height: 32, fontFamily: "var(--font-display)", fontSize: 20, lineHeight: 1, cursor: "pointer", boxShadow: "2px 2px 0 #1A1213" } }, "\xD7"), !submitted ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { color: "#E04F8E", marginBottom: 8 } }, "Quantum Shift call"), /* @__PURE__ */ React.createElement("h3", { style: { fontFamily: "var(--font-display)", fontSize: 36, lineHeight: 1, textTransform: "uppercase", color: "#1A1213", margin: 0 } }, "Let's talk timelines."), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-italic)", fontStyle: "italic", fontSize: 17, color: "#1A1213", marginTop: 8, marginBottom: 18 } }, "Free \xB7 30 min \xB7 zero pressure."), /* @__PURE__ */ React.createElement("form", { onSubmit: async (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/xwvydndk", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "New Quantum Shift call request",
          Name: f.Name.value,
          Email: f.Email.value,
          Manifesting: f.Manifesting.value
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
  }, style: { display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block" } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 5 } }, "Your name"), /* @__PURE__ */ React.createElement("input", { required: true, name: "Name", type: "text", placeholder: "Amanda", style: { width: "100%", fontFamily: "var(--font-body)", fontSize: 17, padding: "11px 14px", border: "2.5px solid #1A1213", borderRadius: 12, background: "#fff", boxShadow: "4px 4px 0 #1A1213", outline: "none" } })), /* @__PURE__ */ React.createElement("label", { style: { display: "block" } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 5 } }, "Email"), /* @__PURE__ */ React.createElement("input", { required: true, name: "Email", type: "email", placeholder: "hello@you.com", style: { width: "100%", fontFamily: "var(--font-body)", fontSize: 17, padding: "11px 14px", border: "2.5px solid #1A1213", borderRadius: 12, background: "#fff", boxShadow: "4px 4px 0 #1A1213", outline: "none" } })), /* @__PURE__ */ React.createElement("label", { style: { display: "block" } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 5 } }, "What are you manifesting?"), /* @__PURE__ */ React.createElement("textarea", { name: "Manifesting", rows: "2", placeholder: "A new timeline.", style: { width: "100%", fontFamily: "var(--font-body)", fontSize: 17, padding: "11px 14px", border: "2.5px solid #1A1213", borderRadius: 12, background: "#fff", boxShadow: "4px 4px 0 #1A1213", outline: "none", resize: "none" } })), /* @__PURE__ */ React.createElement("button", { type: "submit", disabled: submitting, className: "btn-pop", style: { marginTop: 8, justifyContent: "center", opacity: submitting ? 0.6 : 1 } }, submitting ? "Sending\u2026" : "Send it"), error && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-body)", fontSize: 13, color: "#E15549", textAlign: "center" } }, error))) : /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "12px 8px" } }, /* @__PURE__ */ React.createElement("h3", { style: { fontFamily: "var(--font-display)", fontSize: 36, lineHeight: 1, textTransform: "uppercase", color: "#1A1213", margin: "4px 0 8px" } }, "It's done."), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-italic)", fontStyle: "italic", fontSize: 18, color: "#1A1213" } }, "You'll hear from Amanda within 24 hours. The shift already started."), /* @__PURE__ */ React.createElement("button", { onClick: onClose, className: "btn-pop btn-pop--cyan", style: { marginTop: 16 } }, "Back to the page"))));
}
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [booking, setBooking] = React.useState(false);
  const open = () => setBooking(true);
  React.useEffect(() => {
    window.__TWEAKS = t;
  }, [t]);
  const dynamicStyle = `
    :root {
      --marquee-bg: ${t.marqueeBg};
      --marquee-speed: ${t.marqueeSpeed}s;
      --hero-grad-start: ${t.heroGradientStart};
      --hero-grad-end: ${t.heroGradientEnd};
    }
  `;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("style", null, dynamicStyle), /* @__PURE__ */ React.createElement(Nav, { onCTAClick: open, ctaLabel: t.ctaLabel }), /* @__PURE__ */ React.createElement(Hero, { onCTAClick: open, ctaLabel: t.ctaLabel, accentTape: t.accentTape, showSparkles: t.showSparkles }), /* @__PURE__ */ React.createElement(Marquee, null), /* @__PURE__ */ React.createElement(ProgramSection, { onCTAClick: open, ctaLabel: t.ctaLabel }), /* @__PURE__ */ React.createElement(BookSection, null), /* @__PURE__ */ React.createElement(Testimonials, null), /* @__PURE__ */ React.createElement(FAQ, null), /* @__PURE__ */ React.createElement(SignupCTA, { onCTAClick: open, ctaLabel: t.ctaLabel }), /* @__PURE__ */ React.createElement(Footer, null), booking && /* @__PURE__ */ React.createElement(BookingModal, { onClose: () => setBooking(false) }), /* @__PURE__ */ React.createElement(TweaksPanel, { title: "Tweaks" }, /* @__PURE__ */ React.createElement(TweakSection, { label: "Hero gradient" }), /* @__PURE__ */ React.createElement(TweakColor, { label: "Top color", value: t.heroGradientStart, onChange: (v) => setTweak("heroGradientStart", v) }), /* @__PURE__ */ React.createElement(TweakColor, { label: "Bottom color", value: t.heroGradientEnd, onChange: (v) => setTweak("heroGradientEnd", v) }), /* @__PURE__ */ React.createElement(
    TweakRadio,
    {
      label: "Accent tape",
      value: t.accentTape,
      options: ["yellow", "pink", "cyan", "lime"],
      onChange: (v) => setTweak("accentTape", v)
    }
  ), /* @__PURE__ */ React.createElement(
    TweakToggle,
    {
      label: "Floating sparkles",
      value: t.showSparkles,
      onChange: (v) => setTweak("showSparkles", v)
    }
  ), /* @__PURE__ */ React.createElement(TweakSection, { label: "Affirmation marquee" }), /* @__PURE__ */ React.createElement(TweakColor, { label: "Background", value: t.marqueeBg, onChange: (v) => setTweak("marqueeBg", v) }), /* @__PURE__ */ React.createElement(
    TweakSlider,
    {
      label: "Scroll duration",
      value: t.marqueeSpeed,
      min: 20,
      max: 120,
      step: 2,
      unit: "s",
      onChange: (v) => setTweak("marqueeSpeed", v)
    }
  ), /* @__PURE__ */ React.createElement(TweakSection, { label: "Copy" }), /* @__PURE__ */ React.createElement(
    TweakText,
    {
      label: "CTA label",
      value: t.ctaLabel,
      onChange: (v) => setTweak("ctaLabel", v)
    }
  )));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
